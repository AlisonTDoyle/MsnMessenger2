import { Component, Input } from '@angular/core';
import { IMessage } from '../../../interfaces/message';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-received-message',
  standalone: true,
  imports: [
    DatePipe
  ],
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
