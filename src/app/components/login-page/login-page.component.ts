import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username: string = '';
  
  constructor(private router: Router) {}

  login(){
    if (this.username){
      localStorage.setItem('username', this.username.trim())
      this.router.navigate(['/chat'])
    }

  }

}
