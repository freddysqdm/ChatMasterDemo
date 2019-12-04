import { Component, OnInit } from '@angular/core';
import { SignUp } from '../models/SignUp.model';
import { SignupService } from '../services/signup/signup.service';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {

  }

  signup(name, email, password, verifypassword){
    let signUp = new SignUp(name.value, email.value, password.value, verifypassword.value);
    console.log(signUp);

    let data = { g: "London,uk", APPID: "d0b0e110a2b638c5d76c73e1aff5f517" };
    this.signupService.sigup(data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("");
    },err => {
      console.log(err);
      alert("Failed Loading");
    });
  }
}
