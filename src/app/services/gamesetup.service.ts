import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesetupService {

  private url = 'https://backend.gitgood.mohjohfox.de';
  // private url = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) {
  }

  sendGameToServer(game: Game): Observable<Game> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(game);
    return this.httpClient.post<Game>(this.url + '/game/start', body, {headers});
  }

}
