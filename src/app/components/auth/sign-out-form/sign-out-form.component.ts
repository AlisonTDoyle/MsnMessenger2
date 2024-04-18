import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-out-form',
  standalone: true,
  imports: [],
  templateUrl: './sign-out-form.component.html',
  styleUrl: './sign-out-form.component.scss'
})
export class SignOutFormComponent {
  // Inputs and outputs
  @Output() changeForm = new EventEmitter<string>();

  // Methods
  protected ChangeForm(form:string) {
    this.changeForm.emit(form);
  }
}
