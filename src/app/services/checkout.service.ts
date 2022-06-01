import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../model/game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private apiUrl = environment.baseURL;

  constructor(private readonly httpClient: HttpClient) {
  }

  getCheckoutOptionsFromServer(rest: number): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + '/checkoutoptions/' + rest);
  }
}
