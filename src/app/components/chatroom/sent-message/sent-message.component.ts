import { Component, Input } from '@angular/core';
import { IMessage } from '../../../interfaces/message';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sent-message',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './sent-message.component.html',
  styleUrl: './sent-message.component.scss'
})
export class SentMessageComponent {
  // Inputs and outputs
  @Input() sentMessage:IMessage | any;

  // Properties

  // Constructor

  // Methods
}
