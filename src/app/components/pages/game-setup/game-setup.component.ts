import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../../services/todo.service';

@Component({
    selector: 'app-game-setup',
    templateUrl: './game-setup.component.html',
})
export class GameSetupComponent implements OnInit {

    constructor(private readonly todoService: TodoService,
                private readonly router: Router) {
    }

    async ngOnInit() {
        // this.players = await this.todoService.getAll();
    }


    async startGame() {
      // Check and save players and Game Mode
      // Navigate to Game page
      // await this.router.navigate(['item-view', id]);
    }
}
