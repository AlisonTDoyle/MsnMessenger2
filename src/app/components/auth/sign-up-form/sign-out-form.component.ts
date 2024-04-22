import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CognitoService } from '../../../services/cognito/cognito.service';

@Component({
  selector: 'app-sign-out-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-out-form.component.html',
  styleUrl: './sign-out-form.component.scss'
})
export class SignOutFormComponent {
  // Inputs and outputs
  @Output() changeForm = new EventEmitter<string>();

  // Propeties
  protected signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _cognitoService: CognitoService) {
  }

  // Methods
  protected ChangeForm(form: string) {
    this.changeForm.emit(form);
  }

  protected SubmitSignUpForm() {
    console.warn(this.signUpForm.value);
    let username = this.signUpForm.value.username;
    let email = this.signUpForm.value.email;
    let password = this.signUpForm.value.password;

    if ((username != null) && (email != null) && (password != null)) {
      this._cognitoService.handleSignUp(username, password, email)
    }
  }
}
