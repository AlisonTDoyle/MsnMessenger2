import { Component } from '@angular/core';
import { SignInFormComponent } from '../../components/auth/sign-in-form/sign-in-form.component';
import { SignOutFormComponent } from '../../components/auth/sign-out-form/sign-out-form.component';
import { ForgotPasswordFormComponent } from '../../components/auth/forgot-password-form/forgot-password-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    SignInFormComponent
    , SignOutFormComponent
    , ForgotPasswordFormComponent
    , CommonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  // Properties
  protected selectedForm:string = "signIn";

  constructor() {
    
  }

  // Methods
  protected ChangeSelectedForm(form:string) {
    this.selectedForm = form;
  }
}
