import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'chat-app';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('username')){
      this.router.navigate(['/chat'])
    }
    else{
      this.router.navigate(['/login'])

    }
  }
}
