import { Component, OnInit } from '@angular/core';
import { Message } from '../models/Message.model';
import { ChatService } from '../services/chat/chat.service';
import {NgxAutoScroll} from "ngx-auto-scroll";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  chatStyle: string;
  container: any;
  totalOnline = 0;
  ngxAutoScroll: NgxAutoScroll;
  
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    let message = new Message("Welcome to chatbot with Violeta", "../../assets/image/bot.png", new Date(), "bot");
    this.messages.push(message);
  }

  sendMessage(message_content) {
    let message = new Message(message_content.value, "../../assets/image/user.png", new Date(), "user");
    this.messages.push(message);
    console.log(message_content);

    this.chatService.sendMessage(message_content.value)
      .subscribe(res => {
        console.log(res);
        let messageVioleta = new Message(res.result.fulfillment.speech, "../../assets/image/bot.png", new Date(), "bot");
        this.messages.push(messageVioleta);
        message_content.value = "";
        this.ngxAutoScroll.forceScrollDown();
      }, err => {
        console.log(err);
      });

    // this.chatService.sendMessage(message_content.value).subscribe(res => {
    //   debugger;
    //   console.log(res.result.fulfillment.speech);
    //   let messageVioleta = new Message(res.result.fulfillment.speech, "../../assets/image/bot.png", new Date());
    //   this.messages.push(messageVioleta);
    // }, err => {
    //   debugger;
    //   console.log(err);
    // });

    // let promise = new Promise((resolve, reject) => {
    //   var dialogFlow = this.chatService.sendMessage(message_content.value);
    //   dialogFlow.toPromise()
    //     .then(
    //       res => {
    //         debugger;
    //         console.log(res.json());
    //         message = new Message(res.json().result.fulfillment.speech, "../../assets/image/bot.png", new Date());
    //         this.messages.push(message);
    //         resolve();
    //       }, err => {
    //         message = new Message("Violeta no se encuentra disponible, intente de nuevo y disculpe las molestias", "../../assets/image/bot.png", new Date());
    //         this.messages.push(message);
    //         reject(err);
    //       }
    //     );
    //   return promise;
    //   debugger;
    // });
  }
}
