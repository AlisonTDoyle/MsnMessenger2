import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordOutput, fetchUserAttributes, getCurrentUser, resetPassword, signIn, signOut, signUp } from 'aws-amplify/auth';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CognitoService {
  // Properties
  private _userLoggedIn = new Subject();
  public userLoggedIn$ = this._userLoggedIn.asObservable();

  // Constructor
  constructor(private _router: Router) {
  }

  // Methods
  async handleSignUp(username: string, password: string, email: string) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp(
        {
          username,
          password,
          options: {
            userAttributes: {
              email
            },
            // optional
            autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
          }
        });

      console.log(userId);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async UserLoggedIn() {
    try {
      const { username } = await getCurrentUser();
      this._userLoggedIn.next(true);
      return true;
    } catch (error) {
      console.error("Error: " + error);
      return false;
    }
  }

  async SignOut() {
    try {
      await signOut();
      this._userLoggedIn.next(false);
      this._router.navigate(['/auth']);
    } catch (error) {
      console.error("Error: " + error)
    }
  }

  async SignIn(username: string, password: string) {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      this._userLoggedIn.next(true);
      this._router.navigate(['/']);
    } catch (error) {
      console.error("Error: " + error)
    }
  }

  //#region Password Reset
  async RequestReset(username: string) {
    try {
      const output = await resetPassword({ username });
      this.handleResetPasswordNextSteps(output)
    } catch (error) {
      console.error("Error: " + error)
    }
  }

  handleResetPasswordNextSteps(output: ResetPasswordOutput) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case 'DONE':
        console.log('Successfully reset password.');
        break;
    }
    //#endregion
  }
}
