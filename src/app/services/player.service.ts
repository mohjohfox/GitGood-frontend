import { Player} from '../model/player';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {PlayerAddComponent} from '../components/molecules/player-add/player-add.component';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: Map<number, Player> = new Map([
    [1, {
      id: 1,
      name: 'item1',
    }]
  ]);

  constructor(private readonly httpClient: HttpClient) {
  }

  getAll(): Promise<Player[]> {
    return Promise.resolve(Array.from(this.players.values()));
  }

  findById(id: number): Promise<Player> {
    return Promise.resolve(this.players.get(id));
  }

  saveItem(player: Player): Promise<Player> {
    let id = player.id;
    if (!id) {
      id = this.players.size + 1;
      player.id = id;
    }

    this.players.set(id, player);

    return Promise.resolve(this.players.get(id));
  }

  addItem(): Promise<Player[]> {
    const id = this.players.size + 1;
    this.players.set(id, PlayerAddComponent);

    return Promise.resolve(Array.from(this.players.values()));
  }

  private copy(player: Player): Player {
    if (!player) {
      return player;
    }
    return JSON.parse(JSON.stringify(player));
  }
}
