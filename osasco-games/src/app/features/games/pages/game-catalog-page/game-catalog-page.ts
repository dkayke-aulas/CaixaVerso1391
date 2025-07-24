import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS } from '../../../../typings/paths';
import { CatalogService } from '../../services/catalog-service';
import { Game } from '../../../../typings/games';

@Component({
  selector: 'app-game-catalog-page',
  standalone: false,
  templateUrl: './game-catalog-page.html',
  styleUrl: './game-catalog-page.css',
})
export class GameCatalogPage {
  filterText = ''
  games: Game[] = []

  constructor(private router: Router, private catalogService: CatalogService) {
  //  this.games = this.catalogService.getGames()

  this.catalogService.getGames().subscribe((games) => {
    this.games = games
  })
  }

  onDetailGame(idGameSelected: string) {
    const extra = { 
      state: { gameId: idGameSelected } 
    }
    this.router.navigate([PATHS.detail], extra);
  }

  filteredGames () {
    const text = this.filterText.toLowerCase()
    const filter = this.games.filter(game => game.name.toLowerCase().includes(text))
    return filter
  }
}
