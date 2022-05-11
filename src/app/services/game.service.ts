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

}
