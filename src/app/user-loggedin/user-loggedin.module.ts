import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoggedinRoutingModule } from './user-loggedin-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    UserLoggedinRoutingModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class UserLoggedinModule { }
