import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../model/game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = environment.baseURL;

  constructor(private readonly httpClient: HttpClient) {
  }

  getGameFromServer(gameId: string): Observable<Game> {
    return this.httpClient.get<Game>(this.apiUrl + '/game/' + gameId);
  }

  sendSubmitRound(gameId: string, thrownPoints: string[]): Observable<Game> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(thrownPoints);
    return this.httpClient.post<Game>(this.apiUrl +  '/game/' + gameId + '/round/submit', body, {headers});
  }

  deleteGameById(gameId: string) {
    return this.httpClient.delete(this.apiUrl + '/delete/' + gameId).subscribe();
  }

}
