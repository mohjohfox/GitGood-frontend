import { Player} from '../model/player';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {PlayerAddComponent} from '../components/molecules/player-add/player-add.component';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: Map<number, Player> = new Map();

  constructor(private readonly httpClient: HttpClient) {
  }

  getAll(): Promise<Player[]> {
    return Promise.resolve(Array.from(this.players.values()));
  }

  removePlayerById(id: number) {
    this.players.delete(id);
  }

  addItem(): Promise<Player[]> {
    const id = this.players.size + 1;
    const player: Player = new Player(id, '');
    this.players.set(id, player);
    console.log(id);
    return Promise.resolve(Array.from(this.players.values()));
  }

}
