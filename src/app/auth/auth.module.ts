import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoggedinModule } from '../user-loggedin/user-loggedin.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    UserLoggedinModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule { }
