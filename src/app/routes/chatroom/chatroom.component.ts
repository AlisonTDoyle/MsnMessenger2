import { Component, ElementRef, Renderer2 } from '@angular/core';
import { IMessage } from '../../interfaces/message';
import { MessagingService } from '../../services/messaging/messaging.service';
import { ReceivedMessageComponent } from '../../components/chatroom/received-message/received-message.component';
import { CommonModule } from '@angular/common';
import { SentMessageComponent } from '../../components/chatroom/sent-message/sent-message.component';
import { CognitoService } from '../../services/cognito/cognito.service';

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
  constructor(private _messaging: MessagingService, private _renderer: Renderer2, private _el: ElementRef, private _cognito: CognitoService) {
    this.FetchMessages();
  }

  // Methods
  private FetchMessages() {
    this._messaging.FetchMessages().subscribe((messages) => {
      this.messages = messages
    })
  }

  ngAfterViewInit(): void {
    // Scroll to the bottom of the page
    this._renderer.setProperty(document.documentElement, 'scrollTop', document.documentElement.scrollHeight);
  }

  async GetCurrentUser() {
    let result = await this._cognito.UserLoggedIn();
    console.log(result)
    return false;
  }
}
