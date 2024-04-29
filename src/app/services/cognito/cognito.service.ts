import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordOutput, confirmResetPassword, getCurrentUser, resetPassword, signIn, signOut, signUp } from 'aws-amplify/auth';
import { Subject } from 'rxjs';

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
      // Signup user
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

      // Debug message
      console.log(userId);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async UserLoggedIn() {
    try {
      // Get login details of user
      const { signInDetails  } = await getCurrentUser();

      // Update subject's current value
      this._userLoggedIn.next(signInDetails?.loginId);

      return true;
    } catch (error) {
      console.error("Error: " + error);
      return false;
    }
  }

  async GetCurrentUserEmail() {
    const { signInDetails  } = await getCurrentUser();
    let email = signInDetails?.loginId;

    return email;
  }

  async SignOut() {
    try {
      // Sign out user
      await signOut();

      // Set loggin in status to false
      this._userLoggedIn.next(false);

      // Re route user
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
      return "";
    } catch (error) {
      console.error("Error: " + error)
      return error;
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
        this._router.navigate(['/reset-password']);
        break;
      case 'DONE':
        console.log('Successfully reset password.');
        break;
    }
  }

  async ResetPassword(username:string, confirmationCode:string, newPassword:string) {
    try {
      await confirmResetPassword({username, confirmationCode, newPassword})
      this._router.navigate(['/auth']);
    } catch (error) {
      console.error(error)
    }
  }
  //#endregion
}
