import { Routes } from '@angular/router';

// Route components
import { ChatroomComponent } from './routes/chatroom/chatroom.component';
import { AuthComponent } from './routes/auth/auth.component';
import { AwsAuthComponent } from './components/auth/aws-auth/aws-auth.component';
import { AuthService } from './guards/auth/auth.service';

export const routes: Routes = [
    {path:"auth", component: AuthComponent},
    {path:"", component:ChatroomComponent, canActivate: [AuthService]}
];
