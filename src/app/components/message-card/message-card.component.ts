import { Component, Input } from '@angular/core';
import { Message } from './message.interface';

@Component({
  selector: 'app-message-card',
  imports: [],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss'
})
export class MessageCardComponent {
  @Input() message!: Message;

  createDate(){
    const currentDate = new Date(this.message.time)
    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    if (minutes < 10){
      return `${hours}:0${minutes}`;
    } else {
      return `${hours}:${minutes}`;
    }
    
  }

}
