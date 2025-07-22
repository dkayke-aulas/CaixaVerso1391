import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailPage } from './game-detail-page';

describe('GameDetailPage', () => {
  let component: GameDetailPage;
  let fixture: ComponentFixture<GameDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
