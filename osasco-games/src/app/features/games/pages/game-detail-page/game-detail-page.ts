import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { PATHS } from '../../../../typings/paths';
import { Game } from '../../../../typings/games';
import { CatalogService } from '../../services/catalog-service';
import { Gender } from '../../../../typings/genders';

type State = { gameId: string };

@Component({
  selector: 'app-game-detail-page',
  standalone: false,
  templateUrl: './game-detail-page.html',
  styleUrl: './game-detail-page.css',
})
export class GameDetailPage implements OnInit {
  paths = PATHS;
  game: Game = {} as Game;
  genders: Gender[] = [];

  constructor(
    private catalogService: CatalogService,
    // private router: Router,
    private location: Location
  ) {
    // console.log('CONSTRUTOR');
    // const state = this.router.getCurrentNavigation()?.extras.state as State;
    // console.log(state);
    // const state_location = this.location.getState() as State;
    // console.log(state_location);
  }

  ngOnInit() {
    // console.log('ON INIT');
    const state = this.location.getState() as State;
    console.log(state.gameId);

    this.catalogService.getGame(state.gameId).subscribe((game) => {
      this.game = game;
    });
    
    this.catalogService.getGenders().subscribe((genders) => {
      this.genders = genders;
    });
  }

  convertGender(genderId: string) {
    const found = this.genders.find((item) => item.id === genderId);
    return found?.name ?? 'Não especificado';
  }
}
