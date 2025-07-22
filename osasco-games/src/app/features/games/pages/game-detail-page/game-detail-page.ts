import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type State = { gameId: string }

@Component({
  selector: 'app-game-detail-page',
  standalone: false,
  templateUrl: './game-detail-page.html',
  styleUrl: './game-detail-page.css',
})
export class GameDetailPage implements OnInit {

  constructor(private router: Router, private location: Location) {
    // console.log('CONSTRUTOR');
    // const state = this.router.getCurrentNavigation()?.extras.state as State;
    // console.log(state);

    // const state_location = this.location.getState() as State;
    // console.log(state_location);
  }

  ngOnInit() {
    // console.log('ON INIT');
    const state_location = this.location.getState();
    console.log(state_location);
  }
}
