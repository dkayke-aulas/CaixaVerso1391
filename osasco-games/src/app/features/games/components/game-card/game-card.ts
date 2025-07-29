import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from './../../../../typings/games';
import { LocalStorageService } from '../../../common/service/local-storage-service';

@Component({
  selector: 'app-game-card',
  standalone: false,
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard implements OnInit {
  keyJogosCurtidos = '@jogos-curtidos';

  @Input({ required: true }) game!: Game;
  @Output() ondetail = new EventEmitter<string>();

  liked: boolean = false;
  hover: boolean = false;

  constructor(private storage: LocalStorageService) {}

  ngOnInit() {
    const jogos = this.recuperaJogosCurtidos();
    this.liked = jogos.hasOwnProperty(this.game.id.toString());
  }

  recuperaJogosCurtidos(): Record<string, string> {
    const jogos = this.storage.getItem(this.keyJogosCurtidos) ?? '{}';
    return JSON.parse(jogos);
  }

  toggleLike() {
    this.liked = !this.liked;

    const jogos = this.recuperaJogosCurtidos();

    console.log({ jogos, id: this.game.id, like: this.liked });

    // jogos = {
    //   banana: ''
    // }

    // jogos['banana'] = ''

    jogos[this.game.id] = this.liked.toString();

    this.storage.setItem('@jogos-curtidos', JSON.stringify(jogos));
  }
}
