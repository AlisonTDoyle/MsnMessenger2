import { Component } from '@angular/core';
import { IMessage } from '../../interfaces/message';
import { MessagingService } from '../../services/messaging/messaging.service';
import { ReceivedMessageComponent } from '../../components/chatroom/received-message/received-message.component';
import { CommonModule } from '@angular/common';
import { SentMessageComponent } from '../../components/chatroom/sent-message/sent-message.component';

@Component({
  selector: 'app-chatroom',
  standalone: true,
  imports: [
    ReceivedMessageComponent
    , SentMessageComponent
    , CommonModule
  ],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.scss'
})
export class ChatroomComponent {
  // Properties
  protected messages: IMessage[] = [];
  protected sampleSentMessage: IMessage = {
    message: "hello world",
    username: "test@email.com",
    id: "1234",
    createdAt: "2024-04-25T20:40:02.605Z"
  }
  // Constructor
  constructor(private _messaging: MessagingService) {
    this.FetchMessages();
  }

  // Methods
  private FetchMessages() {
    this._messaging.FetchMessages().subscribe((messages) => {
      this.messages = messages
    })
  }
}
