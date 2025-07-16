import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  // template: `
  //   <p>Olá<p>
  // `,
  styleUrl: './app.css',
})
export class App {
  qtdClique = 0;

  // cliqueDoBotao = () => {
  //   console.log('Clicou', ++this.qtdClique);
  // };

  cliqueDoBotao() {
    console.log('Clicou', ++this.qtdClique);
  }

  jogo = {
    nome: 'Pulo do gato ninja',
    imagem:
      'https://i.ytimg.com/vi/JuP3nmylMlk/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGFogWShlMA8=&rs=AOn4CLBIB3mEhZL373OnIEfLJMXMM_2tXA',
  };
}
