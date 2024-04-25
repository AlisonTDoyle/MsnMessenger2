import { Component, EventEmitter, Output } from '@angular/core';
import { CognitoService } from '../../../services/cognito/cognito.service';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss'
})
export class ForgotPasswordFormComponent {
  // Inputs and outputs
  @Output() changeForm = new EventEmitter<string>();

  // Constructor
  constructor(private _cognito:CognitoService) {

  }

  // Methods
  protected ChangeForm(form:string) {
    this.changeForm.emit(form);
  }

  protected RequestPasswordReset(email:string) {
    this._cognito.RequestReset(email);
    return false;
  }
}
