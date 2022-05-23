import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameModeService {

  private apiUrl = environment.baseURL;

  constructor(private readonly httpClient: HttpClient) {
  }
  getGameModeByName(gameModeName: string): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/gamemode/' + gameModeName);
  }

}
