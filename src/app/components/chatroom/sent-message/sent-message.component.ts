import { Component } from '@angular/core';

@Component({
  selector: 'app-sent-message',
  standalone: true,
  imports: [],
  templateUrl: './sent-message.component.html',
  styleUrl: './sent-message.component.scss'
})
export class SentMessageComponent {
  protected messageText:string | any;
}
