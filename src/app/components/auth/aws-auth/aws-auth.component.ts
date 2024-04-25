import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { CognitoService } from '../../../services/cognito/cognito.service';

@Component({
  selector: 'app-aws-auth',
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule
    , RouterLink
    , RouterLinkActive
  ],
  templateUrl: './aws-auth.component.html',
  styleUrl: './aws-auth.component.scss'
})
export class AwsAuthComponent {
  loggedIn:boolean | any;

  constructor(private _router:Router, private _cognito:CognitoService) {
    this.SubscribeToLoginStatus();
  }

  protected SubscribeToLoginStatus() {
    this._cognito.userLoggedIn$.subscribe((result) => {
      this.RedirectToChatRoom();
    })
  }

  protected RedirectToChatRoom() {
    this._router.navigate([''])
  }
}
