import { Routes } from '@angular/router';

// Route components
import { LoginComponent } from './routes/login/login.component';
import { ChatroomComponent } from './routes/chatroom/chatroom.component';

export const routes: Routes = [
    { path: "", redirectTo: "/chat", pathMatch: 'full' },
    { path: "chat", component: ChatroomComponent },
    { path: "login", component: LoginComponent }
];
