import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCard } from './game-card';

describe('GameCard', () => {
  let component: GameCard;
  let fixture: ComponentFixture<GameCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
