import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../../../typings/games';

@Component({
  selector: 'app-game-card-list',
  standalone: false,
  templateUrl: './game-card-list.html',
  styleUrl: './game-card-list.css',
})
export class GameCardList {
  @Input() games: Game[] = [];
  @Output() ondetailgame = new EventEmitter()

  detailGame(gameId: string) {
    this.ondetailgame.emit(gameId)
  }

  trackBy(index: number) {
    return index;
  }
}
