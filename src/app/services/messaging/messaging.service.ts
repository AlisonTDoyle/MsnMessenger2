import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { Message } from '../../interfaces/message';
import { IMessageApiResponse } from '../../interfaces/message-api-response';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  // Properties
  private _mockApi = "https://6626c4e9b625bf088c069641.mockapi.io/messages/messages";
  private _prodApi = "https://z1q5fqlqja.execute-api.eu-west-1.amazonaws.com/PROD/";
  private _fetchMessagesUrl = "https://serya7kr54omebtjbncszqbiey0gahbx.lambda-url.eu-west-1.on.aws/"

  // Constructor
  constructor(private _http: HttpClient) { }

  // Methods
  public FetchMessages() {
    return this._http.get<IMessageApiResponse>(this._fetchMessagesUrl)
      .pipe(
        // Debug message
        tap((data) => console.log(data)),
        catchError(this.handleError)
      );
  }

  public SendMessage(messageText: string) {
    let requestBody = {
      "message": messageText
    }

    console.log(requestBody);

    return this._http.post(this._prodApi + "message", {"message": "test from application"}, { headers: { "Content-Type": "application/json" }} )
      .pipe(
        // Debug message
        tap((data) => console.log(data)),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    console.log("OmdbApiService:" + error.message);
    return throwError(() => new Error("OmdbApiService:" + error.message))
  }
}
