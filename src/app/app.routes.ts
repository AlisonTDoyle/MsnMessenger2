import { Routes } from '@angular/router';

// Route components
import { ChatroomComponent } from './routes/chatroom/chatroom.component';
import { AuthComponent } from './routes/auth/auth.component';

export const routes: Routes = [
    {path:"auth", component: AuthComponent}
];
