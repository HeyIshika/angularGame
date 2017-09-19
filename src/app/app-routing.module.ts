import { GamepageComponent } from './gamepage/gamepage.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'gamepage', component: GamepageComponent }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


