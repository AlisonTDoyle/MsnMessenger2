import { Component } from '@angular/core';
import { CognitoService } from '../../../services/cognito/cognito.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  constructor(private _cognito:CognitoService) {

  }

  ChangePassword(resetCode:string, email:string, password:string) {
    this._cognito.ResetPassword(email, resetCode, password);
    return false;
  }
}
