import { Component } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-aws-auth',
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule
  ],
  templateUrl: './aws-auth.component.html',
  styleUrl: './aws-auth.component.scss'
})
export class AwsAuthComponent {

}
