import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../../../typings/games';
import { Observable } from 'rxjs';
import { Gender } from '../../../typings/genders';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games`)
  }
  
  getGame(gameId: string): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/games/${gameId}`)
  }
  
  getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(`${this.baseUrl}/genders/`)
  }
}
