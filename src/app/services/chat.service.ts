import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../components/message-card/message.interface';



@Injectable({
  providedIn: 'root'
})

export class ChatService {
  channel = new BroadcastChannel("channel_id");
  messages: Message[]= JSON.parse(localStorage.getItem('messages') || '[]');
  subject = new BehaviorSubject<any[]>(this.messages);
  username = localStorage.getItem('username') || '';

  constructor() {
    this.channel.onmessage = (event) => {
      const message = event.data;
      this.addMessage(message);
    };
  }

  channelPost(messageText: string){
    const newMessage: Message = {
      text: messageText,
      user: this.username,
      time: new Date()
    };
    this.addMessage(newMessage);
    this.channel.postMessage(newMessage);
  }

  addMessage(message: any){
    this.messages.push(message);
    localStorage.setItem('messages', JSON.stringify(this.messages));
    this.subject.next([...this.messages]);
  }



}
