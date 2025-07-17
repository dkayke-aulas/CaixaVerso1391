import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  games = [
    {
      id: '01',
      image: 'assets/1.jpg',
      nome: 'Jogo legal 1',
    },
    {
      id: '02',
      image: 'assets/2.jpg',
      nome: 'Jogo legal 2',
    }
  ]

  onDetail(id: string) {
    console.log(id)
  }
}
