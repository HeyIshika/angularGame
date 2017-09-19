import { ShuffleService } from './shuffle.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GamepageComponent } from './gamepage/gamepage.component';
import { AppRoutingModule } from './app-routing.module';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShuffleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
