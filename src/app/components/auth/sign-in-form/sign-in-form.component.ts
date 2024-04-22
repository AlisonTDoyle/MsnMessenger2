import { Component, EventEmitter, Output } from '@angular/core';

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

  // Methods
  protected ChangeForm(form:string) {
    this.changeForm.emit(form);
  }
}
