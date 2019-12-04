import { Component, OnInit } from '@angular/core';
import { Message } from '../models/Message.model';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    let message = new Message("Welcome to chatbot with Violeta", "../../assets/image/bot.png", new Date());
    this.messages.push(message);
  }

  sendMessage(message_content) {

    let message = new Message(message_content.value, "../../assets/image/user.png", new Date());
    this.messages.push(message);
    console.log(message_content);

    this.chatService.sendMessage(message_content.value).subscribe(res => {
      debugger;
      console.log(res.result.fulfillment.speech);
      let messageVioleta = new Message(res.result.fulfillment.speech, "../../assets/image/bot.png", new Date());
      this.messages.push(messageVioleta);
    }, err => {
      debugger;
      console.log(err);
    });
  }
}
