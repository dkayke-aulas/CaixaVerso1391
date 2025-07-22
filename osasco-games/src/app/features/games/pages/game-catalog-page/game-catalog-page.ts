import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS } from '../../../../typings/paths';

@Component({
  selector: 'app-game-catalog-page',
  standalone: false,
  templateUrl: './game-catalog-page.html',
  styleUrl: './game-catalog-page.css',
})
export class GameCatalogPage {
  games = [
    {
      id: '1',
      name: 'Ecos da Antiga Ruína',
      genderId: '1',
      description:
        'Desvende segredos ancestrais em um mundo aberto vasto, onde suas escolhas moldam o destino de reinos caídos e criaturas míticas.',
    },
    {
      id: '2',
      name: 'Pixel Quest: Salto Temporal',
      genderId: '2',
      description:
        'Embarque em uma aventura retrô através de eras distintas, usando habilidades de salto e raciocínio rápido para superar armadilhas e coletar artefatos perdidos.',
    },
    {
      id: '3',
      name: 'Conexões Quebradas',
      genderId: '3',
      description:
        'Neste jogo de quebra-cabeças complexos, reconecte circuitos em uma estação espacial danificada para restaurar sistemas vitais e evitar um colapso iminente.',
    },
    {
      id: '4',
      name: 'A Balada do Necromante',
      genderId: '1',
      description:
        'Assuma o papel de um necromante em busca de redenção, erguendo exércitos de mortos-vivos para combater uma força sombria que ameaça devorar o continente.',
    },
    {
      id: '5',
      name: 'Olhos da Escuridão',
      genderId: '4',
      description:
        'Explore um hospício decrépito onde as paredes guardam segredos perturbadores. A cada sombra, uma nova visão do inferno se revela.',
    },
    {
      id: '6',
      name: 'Salto para o Desconhecido',
      genderId: '2',
      description:
        'Um jogo de plataforma com elementos roguelike. Cada salto é uma aposta em ambientes gerados proceduralmente, repletos de perigos e recompensas.',
    },
    {
      id: '7',
      name: 'Decifrador de Runas',
      genderId: '3',
      description:
        'Em um templo antigo, decifre runas complexas para abrir portas secretas, ativar mecanismos e desvendar a verdade por trás de uma civilização esquecida.',
    },
    {
      id: '8',
      name: 'Crônicas do Cavaleiro Dragão',
      genderId: '1',
      description:
        'Torne-se um lendário cavaleiro dragão, domando bestas aladas e empunhando magia ancestral para proteger os inocentes de um império tirano.',
    },
    {
      id: '9',
      name: 'O Ritual Silencioso',
      genderId: '4',
      description:
        'Presencie eventos inexplicáveis em uma pequena vila isolada. O silêncio é a chave, mas também o maior terror neste jogo de horror psicológico.',
    },
    {
      id: '10',
      name: 'Aventuras no Mundo da Tinta',
      genderId: '2',
      description:
        'Explore um mundo vibrante desenhado à mão, onde a tinta é seu poder. Pule, corra e resolva quebra-cabeças utilizando habilidades únicas de pintura.',
    },
    {
      id: '11',
      name: 'Esferas de Energia',
      genderId: '3',
      description:
        'Conecte esferas de energia de cores diferentes para criar reações em cadeia e acionar portais, avançando por níveis desafiadores que testam seu raciocínio.',
    },
    {
      id: '12',
      name: 'As Fronteiras do Além',
      genderId: '1',
      description:
        'Uma jornada épica através de dimensões paralelas. Recrute heróis de diferentes realidades e enfrente ameaças cósmicas que transcendem a compreensão.',
    },
    {
      id: '13',
      name: 'Reflexos Distorcidos',
      genderId: '4',
      description:
        'Um jogo de terror em primeira pessoa onde o ambiente reage aos seus medos. Cada reflexo, cada sombra pode esconder algo aterrorizante.',
    },
    {
      id: '14',
      name: 'Flutuação Livre',
      genderId: '2',
      description:
        'Controle um personagem leve como uma pena em um ambiente de gravidade zero. Use propulsores e impulsos para navegar por plataformas e evitar obstáculos.',
    },
    {
      id: '15',
      name: 'Cubo da Complexidade',
      genderId: '3',
      description:
        'Manipule um cubo multidimensional, girando suas faces e alinhando padrões para desbloquear passagens secretas e desvendar seus mistérios intrincados.',
    },
    {
      id: '16',
      name: 'O Despertar dos Primordiais',
      genderId: '1',
      description:
        'Em um mundo à beira da catástrofe, desperte os poderes de antigas divindades e lidere a resistência contra uma força maligna que busca consumir toda a existência.',
    },
    {
      id: '17',
      name: 'A Mansão Silenciosa',
      genderId: '4',
      description:
        'Você é o único sobrevivente de um grupo de exploradores em uma mansão amaldiçoada. Os sons distantes e a atmosfera opressiva são seus piores inimigos.',
    },
    {
      id: '18',
      name: 'Pulo do Gato Ninja',
      genderId: '2',
      description:
        'Um ágil ninja felino precisa correr e pular por telhados, desviando de shurikens e armadilhas para resgatar sua mestra das garras de um clã rival.',
    },
    {
      id: '19',
      name: 'Engrenagens do Destino',
      genderId: '3',
      description:
        'Construa e otimize máquinas complexas, utilizando engrenagens, polias e alavancas para resolver quebra-cabeças mecânicos e desvendar os segredos de uma civilização antiga.',
    },
    {
      id: '20',
      name: 'O Sussurro na Névoa',
      genderId: '4',
      description:
        'Preso em uma mansão abandonada, cada passo pode ser o último. A sanidade se esvai enquanto você tenta sobreviver a uma presença sobrenatural implacável.',
    },
  ];

  constructor(private router: Router) {}

  onDetailGame(idGameSelected: string) {
    const extra = { 
      state: { gameId: idGameSelected } 
    }
    this.router.navigate([PATHS.detail], extra);
  }
}
