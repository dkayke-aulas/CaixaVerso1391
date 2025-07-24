import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCard } from './components/game-card/game-card';
import { GameCardList } from './components/game-card-list/game-card-list';
import { GameCatalogPage } from './pages/game-catalog-page/game-catalog-page';
import { GameDetailPage } from './pages/game-detail-page/game-detail-page';
import { CatalogService } from './services/catalog-service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GenderByIdPipe } from './pipe/gender-by-id-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameCard,
    GameCardList,
    GameCatalogPage,
    GameDetailPage,
    GenderByIdPipe
  ],
  imports: [
    FormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    // GameCard,
    // GameCardList
    GameCatalogPage
  ],
  providers: [
    CatalogService
  ]
})
export class GamesModule { }
