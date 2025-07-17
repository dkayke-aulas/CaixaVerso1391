import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCard } from './components/game-card/game-card';

@NgModule({
  declarations: [
    GameCard
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameCard
  ]
})
export class GamesModule { }
