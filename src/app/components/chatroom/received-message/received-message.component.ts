import { Component, Input } from '@angular/core';
import { IMessage } from '../../../interfaces/message';

@Component({
  selector: 'app-received-message',
  standalone: true,
  imports: [],
  templateUrl: './received-message.component.html',
  styleUrl: './received-message.component.scss'
})
export class ReceivedMessageComponent {
  // Inputs and outputs
  @Input() receivedmessage:IMessage | any;

  // Properties

  // Constructor
  constructor() {
  }

  // Methods
}
