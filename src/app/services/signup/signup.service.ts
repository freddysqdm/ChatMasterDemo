import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: Http) { }

  public sigup(data) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d0b0e110a2b638c5d76c73e1aff5f517";
    let data0 = { 
      q: "q=London", 
      APPID: "d0b0e110a2b638c5d76c73e1aff5f517" 
    };
    return this.http.get(url);
  }
}
