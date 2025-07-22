import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCard } from './components/game-card/game-card';
import { GameCardList } from './components/game-card-list/game-card-list';
import { GameCatalogPage } from './pages/game-catalog-page/game-catalog-page';
import { GameDetailPage } from './pages/game-detail-page/game-detail-page';

@NgModule({
  declarations: [
    GameCard,
    GameCardList,
    GameCatalogPage,
    GameDetailPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // GameCard,
    // GameCardList
    GameCatalogPage
  ]
})
export class GamesModule { }
