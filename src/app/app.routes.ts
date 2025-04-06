import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginPageComponent},
    {path: 'chat', component: ChatPageComponent}
];
