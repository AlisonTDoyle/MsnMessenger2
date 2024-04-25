import { Component } from '@angular/core';
import { CognitoService } from '../../services/cognito/cognito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userSignedIn: boolean | any;

  constructor(private _cognito: CognitoService) {
    this.CheckIfUserIsSignedIn();
  }

  protected async CheckIfUserIsSignedIn() {
    this._cognito.userLoggedIn$.subscribe((result) => {
      this.userSignedIn = result;
    })
  }

  protected async SignOut() {
    await this._cognito.SignOut();
  }
}
