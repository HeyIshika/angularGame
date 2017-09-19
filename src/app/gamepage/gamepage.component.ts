import { TimerComponent } from './../timer/timer.component';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ShuffleService } from '../shuffle.service';

@Component({
 selector: 'gamepage',
 templateUrl: './gamepage.component.html',
 styleUrls: ['./gamepage.component.css']
})
export class GamepageComponent implements OnInit  {
 title = 'app';

 sub: Subscription;
 constructor(private hackathon: ShuffleService) {}
 score = 0;
 public ticks = 0;
 ngOnInit() {
   this.hackathon.colors = this.hackathon.shuffle(['white', 'red', 'blue', 'black']);
   console.log(this.hackathon.colors);
 }
 onClick(color) {
   if (color === 'white' && this.hackathon.finish) {
     this.score++;
   }
   console.log(this.score);
 }
}