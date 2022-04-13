import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../../model/todo';
import { TodoService } from '../../../services/todo.service';
import {Player} from '../../../model/player';

@Component({
    selector: 'app-player-selection',
    templateUrl: './player-selection.component.html',
})
export class PlayerSelectionComponent implements OnInit {
    players: Player[];

    constructor(private readonly todoService: TodoService,
                private readonly router: Router) {
    }

    async ngOnInit() {
      // Add one Player Field
      // this.players = await this.playerService.getAll();
    }

    async addPlayer() {
        // add a new player-add.component to the page
    }

}
