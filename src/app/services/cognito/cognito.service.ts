import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { fetchUserAttributes, getCurrentUser, signOut, signUp } from 'aws-amplify/auth';
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
}
