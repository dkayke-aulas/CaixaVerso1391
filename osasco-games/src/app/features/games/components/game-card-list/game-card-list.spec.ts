import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardList } from './game-card-list';

describe('GameCardList', () => {
  let component: GameCardList;
  let fixture: ComponentFixture<GameCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
