import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from './typings/paths';
import { GameCatalogPage } from './features/games/pages/game-catalog-page/game-catalog-page';
import { GameDetailPage } from './features/games/pages/game-detail-page/game-detail-page';

const routes: Routes = [
  {
    path: PATHS.base,
    redirectTo: PATHS.catalog,
    pathMatch: 'full'
  },
  {
    path: PATHS.catalog,
    component: GameCatalogPage
  },
  {
    path: PATHS.detail,
    component: GameDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
