import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCatalogPage } from './game-catalog-page';

describe('GameCatalogPage', () => {
  let component: GameCatalogPage;
  let fixture: ComponentFixture<GameCatalogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCatalogPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
