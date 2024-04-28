import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Message } from '../../interfaces/message';
import { IMessageApiResponse } from '../../interfaces/message-api-response';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  // Properties
  private _mockApi = "https://6626c4e9b625bf088c069641.mockapi.io/messages/messages"

  // Constructor
  constructor(private _http:HttpClient) { }

  // Methods
  public FetchMessages() {
    return this._http.get<Message[]>(this._mockApi)
    .pipe(
      // Debug message
      tap((data) => console.log(data))
       
    );
  }
}
