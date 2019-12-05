import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUrl = "https://api.dialogflow.com/api/query?v=20150910";
  accesToken = "f3bed2c037034f90b2ae40918ea0a0cf";
  constructor(private http: Http) { }

  public sendMessage(message: string) {
    console.log(message);
    let data = {
      lang: "en",
      sessionId: "123456",
      query: message
    }

    // return this.http.post(this.baseUrl, {
    //   headers: {
    //     'Content-Type': "application/json",
    //     Authorization: "Bearer " + this.accesToken
    //   },
    //   body:{
    //     lang: "en",
    //     sessionId: "123456",
    //     query: message
    //   }
    // });

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + this.accesToken);
    return this.http.post(this.baseUrl, data, { headers: headers }).map(res => {
      return res.json();
    });

    //return this.http.post(this.baseUrl, data, { headers: headers })
  }
}
