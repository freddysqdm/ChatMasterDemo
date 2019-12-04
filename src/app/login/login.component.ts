import { Component, OnInit } from '@angular/core';
import { Login } from '../models/Login.model';
import { LoginService } from '../services/login/login.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  login(username, password){
    let login = new Login(username.value, password.value);
    console.log(login);

    let data = { g: "London,uk", APPID: "d0b0e110a2b638c5d76c73e1aff5f517" };
    this.loginService.login(data).subscribe(res => {
      console.log(res);
    },err => {
      console.log(err);
      alert("Failed Loading");
    });
  }
}