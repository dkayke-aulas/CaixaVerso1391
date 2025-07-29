import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { PATHS } from '../../../../typings/paths';
import { Game } from '../../../../typings/games';
import { CatalogService } from '../../services/catalog-service';
import { Gender } from '../../../../typings/genders';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type State = { gameId: string };

@Component({
  selector: 'app-game-detail-page',
  standalone: false,
  templateUrl: './game-detail-page.html',
  styleUrl: './game-detail-page.css',
})
export class GameDetailPage implements OnInit {
  form: FormGroup

  paths = PATHS;
  game: Game = {} as Game;
  genders: Gender[] = [];

  constructor(
    private fb: FormBuilder,
    private catalogService: CatalogService,
    // private router: Router,
    private location: Location
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      telefone: ['(xx)xxx-xxxx']
    })

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
  
  onSubmit() {

    if(this.form.valid) {
      const { nome: name, telefone: phone } = this.form.value 
      console.log({ name, phone })
    }
    else {
      this.form.markAllAsTouched()
    }
  }

  get nome() {
    return this.form.get('nome')
  }

  get telefone() {
    return this.form.get('telefone')
  }

  convertGender(genderId: string) {
    const found = this.genders.find((item) => item.id === genderId);
    return found?.name ?? 'Não especificado';
  }
}
