import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { CarModule } from './car/car.module';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule, CarModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
