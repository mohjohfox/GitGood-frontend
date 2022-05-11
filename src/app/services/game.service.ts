import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getGameFromServer(gameId: string): Observable<Game> {
    return this.httpClient.get<Game>('https://backend.gitgood.mohjohfox.de/game/' + gameId);
  }

  sendSubmitRound(gameId: string, thrownPoints: string[]): Observable<Game> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(thrownPoints);
    return this.httpClient.post<Game>('https://backend.gitgood.mohjohfox.de/game/' + gameId + '/round/submit', body, {headers});
  }

}
