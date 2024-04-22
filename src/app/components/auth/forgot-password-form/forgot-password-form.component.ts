import { Component, EventEmitter, Output } from '@angular/core';

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

  // Methods
  protected ChangeForm(form:string) {
    this.changeForm.emit(form);
  }
}