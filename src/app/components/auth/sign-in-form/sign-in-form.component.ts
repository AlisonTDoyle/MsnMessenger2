import { Component, EventEmitter, Output } from '@angular/core';
import { CognitoService } from '../../../services/cognito/cognito.service';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss'
})
export class SignInFormComponent {
  // Inputs and outputs
  @Output() changeForm = new EventEmitter<string>();

  // Constructor
  constructor(private _cognito:CognitoService) {

  }

  // Methods
  protected ChangeForm(form:string) {
    this.changeForm.emit(form);
  }

  protected SignIn(email:string, password:string) {
    this._cognito.SignIn(email, password);
    return false;
  }
}
