import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import {Player} from '../../../model/player';

@Component({
    selector: 'app-player-selection',
    templateUrl: './player-selection.component.html',
})
export class PlayerSelectionComponent implements OnInit {

  @Output() newPlayerEvent = new EventEmitter<string>();
  private players: Map<number, Player> = new Map();
  playersAsArray: Player[];

    constructor(private readonly router: Router) {
    }

  async ngOnInit() {
      // Add one Player Field
      this.playersAsArray = await this.getAll();
    }

    async addPlayer() {
        // add a new player-add.component to the page
      await this.addItem();
      this.playersAsArray = await this.getAll();
      console.log(this.playersAsArray);
    }

  async removePlayer(id: number) {
      console.log('remove player method');
      console.log(id);
      this.removePlayerById(id);
      this.playersAsArray = await this.getAll();
  }

  async setPlayerNameFromInput(name: any, id: number) {
      console.log('eee ' + name);
      console.log(id);

      this.players.get(id).name = name;
      this.playersAsArray = await this.getAll();
      console.log(this.playersAsArray);
  }

  private getAll(): Promise<Player[]> {
    return Promise.resolve(Array.from(this.players.values()));
  }

  private removePlayerById(id: number) {
    this.players.delete(id);
  }

  private addItem(): Promise<Player[]> {
    const id = this.players.size + 1;
    const player: Player = new Player(id, '');
    this.players.set(id, player);
    console.log(id);
    return Promise.resolve(Array.from(this.players.values()));
  }

}
