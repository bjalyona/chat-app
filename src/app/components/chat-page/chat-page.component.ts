import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageCardComponent } from '../message-card/message-card.component';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { Message } from '../message-card/message.interface';

@Component({
  selector: 'app-chat-page',
  imports: [MessageCardComponent, CommonModule, FormsModule],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent implements OnInit{
  messages: Message[] = [];
  message: string = '';

  constructor(private chatService: ChatService,  private cdr: ChangeDetectorRef) {
    this.messages = this.chatService.messages
  }

  ngOnInit(): void {
    this.chatService.subject.subscribe((msgs) => {
      this.messages = msgs;
      this.cdr.detectChanges();
      this.scrollToElement();
    });
  }

  sendMessage(){
    if (this.message.trim()) {
      this.chatService.channelPost(this.message);
      this.message = '';
    }
    
  }

  @ViewChild('scroll_target') private myScrollContainer!: ElementRef;

  scrollToElement(): void {
    this.myScrollContainer.nativeElement.scroll({
      top: this.myScrollContainer.nativeElement.scrollHeight,
      left: 0,

    });
  }

}
