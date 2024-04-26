import { Component, EventEmitter, Output } from '@angular/core';
import { CognitoService } from '../../../services/cognito/cognito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss'
})
export class SignInFormComponent {
  // Inputs and outputs
  @Output() changeForm = new EventEmitter<string>();

  // Properties
  errorMessage:string | any;

  // Constructor
  constructor(private _cognito:CognitoService) {

  }

  // Methods
  protected ChangeForm(form:string) {
    this.changeForm.emit(form);
  }

  protected SignIn(email:string, password:string) {
    this._cognito.SignIn(email, password).then((error) => {this.errorMessage = error});
    return false;
  }
}
