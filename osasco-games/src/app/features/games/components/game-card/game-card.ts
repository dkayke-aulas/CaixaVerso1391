import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from './../../../../typings/games';

@Component({
  selector: 'app-game-card',
  standalone: false,
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  @Input({ required: true }) game: Partial<Game> = {};
  @Output() ondetail = new EventEmitter<string>();

  liked: boolean = false;
  hover: boolean = false;

  constructor() {
    if (this.game.id === undefined) {
      console.error('NÃO TEM O ATRIBUTO GAME');
    }
  }

  toggleLike() {
    this.liked = !this.liked;
  }
}
