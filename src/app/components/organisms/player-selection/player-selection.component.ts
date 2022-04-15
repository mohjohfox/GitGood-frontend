import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Player} from '../../../model/player';
import {PlayerService} from '../../../services/player.service';

@Component({
    selector: 'app-player-selection',
    templateUrl: './player-selection.component.html',
})
export class PlayerSelectionComponent implements OnInit {
    players: Player[];

    constructor(private readonly playerService: PlayerService,
                private readonly router: Router) {
    }

    async ngOnInit() {
      // Add one Player Field
      this.players = await this.playerService.getAll();
    }

    async addPlayer() {
        // add a new player-add.component to the page
      await this.playerService.addItem();
      this.players = await this.playerService.getAll();
    }

  removePlayer(id: number) {

    // remove Player
  }
}
