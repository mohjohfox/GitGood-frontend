import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesetupService {

  constructor(private readonly httpClient: HttpClient) {
  }

  sendGameToServer(game: Game): Observable<Game> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(game);
    return this.httpClient.post<Game>('https://backend.gitgood.mohjohfox.de/game/start', body, {headers});
  }

}
