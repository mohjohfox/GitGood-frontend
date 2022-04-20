import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameModeService {

  constructor(private readonly httpClient: HttpClient) {
  }
  getGameModeByName(gameModeName: string): Observable<any> {
    return this.httpClient.get<any>('https://backend.gitgood.mohjohfox.de/gamemode/' + gameModeName);
  }

}
