import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-card',
  standalone: false,
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  @Input() id: string | undefined;
  @Input() title: string | undefined;
  @Input() image: string | undefined;
  @Output() ondetail = new EventEmitter<string>();

  liked: boolean = false;
  hover: boolean = false;

  constructor() {
    if (this.title === undefined) {
      console.error('NÃO TEM O ATRIBUTO TITLE');
    }
  }

  toggleLike() {
    this.liked = !this.liked;
  }
}
