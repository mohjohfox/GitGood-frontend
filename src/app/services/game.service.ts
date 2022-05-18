import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = 'https://backend.gitgood.mohjohfox.de';
  // private url = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) {
  }

  getGameFromServer(gameId: string): Observable<Game> {
    return this.httpClient.get<Game>(this.url + '/game/' + gameId);
  }

  sendSubmitRound(gameId: string, thrownPoints: string[]): Observable<Game> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(thrownPoints);
    return this.httpClient.post<Game>(this.url +  '/game/' + gameId + '/round/submit', body, {headers});
  }

  deleteGameById(gameId: string) {
    return this.httpClient.delete(this.url + '/delete/' + gameId).subscribe();
  }

}
