import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import {Player} from '../../../model/player';

@Component({
    selector: 'app-player-selection',
    templateUrl: './player-selection.component.html',
})
export class PlayerSelectionComponent implements OnInit, OnChanges {

    private players: Map<number, Player> = new Map();
    playersAsArray: Player[];

    constructor(private readonly router: Router) {
    }

  async ngOnInit() {
      // Add one Player Field
      this.playersAsArray = await this.getAll();
    }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('hauptkombo');
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

  async setPlayerNameFromInput(name: string) {
      console.log(name);
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
