import { Component, ElementRef, Renderer2 } from '@angular/core';
import { IMessage, Message } from '../../interfaces/message';
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
  private test :object  | any
  protected messages: IMessage[] = [];
  protected currentUser : string |any;

  // Constructor
  constructor(private _messaging: MessagingService, private _renderer: Renderer2, private _el: ElementRef, private _cognito: CognitoService) {
    this.FetchMessages();
  }

  // Methods
  private FetchMessages() {
    this._messaging.FetchMessages().subscribe((response) => {
      this.messages = response.Items
    })
  }

  ngAfterViewInit(): void {
    // Scroll to the bottom of the page
    this._renderer.setProperty(document.documentElement, 'scrollTop', document.documentElement.scrollHeight);
  }

  async GetCurrentUser() {
    await this._cognito.userLoggedIn$.subscribe((username) => {
      this.currentUser = username
    });
    return false;
  }

  ngOnChanges() {
    console.log(this.test);
  }

  SendMessage(messageText: string) {
    //   const data = JSON.stringify({ messageText });

    //   fetch("https://z1q5fqlqja.execute-api.eu-west-1.amazonaws.com/PROD/message", {
    //     method: "POST",
    //     mode: "no-cors",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: data
    //   })
    //     .then(response => response.text())
    //     .then(text => {
    //       console.log(text);
    //     });
    // };
    this.test = this._messaging.SendMessage(messageText);
  }
}
