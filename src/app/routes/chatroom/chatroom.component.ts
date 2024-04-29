import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { IMessage, Message } from '../../interfaces/message';
import { MessagingService } from '../../services/messaging/messaging.service';
import { ReceivedMessageComponent } from '../../components/chatroom/received-message/received-message.component';
import { CommonModule } from '@angular/common';
import { SentMessageComponent } from '../../components/chatroom/sent-message/sent-message.component';
import { CognitoService } from '../../services/cognito/cognito.service';
import { getCurrentUser } from 'aws-amplify/auth';

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
export class ChatroomComponent implements OnInit {
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
      this.messages = response.Items.sort((b, a) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    })
  }

  async ngOnInit() {
    this.currentUser = await this._cognito.GetCurrentUserEmail();
  }

  ngAfterViewInit(): void {
    // Scroll to the bottom of the page
    this._renderer.setProperty(document.documentElement, 'scrollTop', document.documentElement.scrollHeight);
  }

  async GetCurrentUser() {
    await this._cognito.userLoggedIn$.subscribe((username) => {
      this.currentUser = username
      console.log(username);
    });
    return false;
  }

  ngOnChanges() {
    console.log(this.test);
  }

  async SendMessage(messageText: string) {
    let email : string | any;
    email = await this._cognito.GetCurrentUserEmail();
    this._messaging.SendMessage(messageText, email).subscribe((data) => {
      console.log(data)
      this.FetchMessages();
    });
  }
}
