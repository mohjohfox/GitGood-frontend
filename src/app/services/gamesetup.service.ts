import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import {Game} from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesetupService {

  private apiUrl = environment.baseURL;

  constructor(private readonly httpClient: HttpClient) {
  }

  sendGameToServer(game: Game): Observable<Game> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(game);
    return this.httpClient.post<Game>(this.apiUrl + '/game/start', body, {headers});
  }

}
