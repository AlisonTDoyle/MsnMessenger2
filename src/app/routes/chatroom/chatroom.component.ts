import { Component } from '@angular/core';
import { IMessage } from '../../interfaces/message';
import { MessagingService } from '../../services/messaging/messaging.service';
import { ReceivedMessageComponent } from '../../components/chatroom/received-message/received-message.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatroom',
  standalone: true,
  imports: [
    ReceivedMessageComponent
    , CommonModule
  ],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.scss'
})
export class ChatroomComponent {
  // Properties
  protected messages:IMessage[] = [];

  // Constructor
  constructor(private _messaging:MessagingService) {
    this.FetchMessages();
  }

  // Methods
  private FetchMessages() {
    this._messaging.FetchMessages().subscribe((messages) => {
      this.messages = messages
    })
  }
}
