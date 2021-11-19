import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../../model/todo';
import { TodoService } from '../../../services/todo.service';

@Component({
    selector: 'app-game-setup',
    templateUrl: './game-setup.component.html',
})
export class GameSetupComponent implements OnInit {
    items: Todo[];

    constructor(private readonly todoService: TodoService,
                private readonly router: Router) {
    }

    async ngOnInit() {
        this.items = await this.todoService.getAll();
    }

    async showDetails(id: number) {
        await this.router.navigate(['item-view', id]);
    }

    async showRules(id: number) {
      // id weißt hierbei den Spielmodus aus (0-5) siehe game-setup.component.html
      // hier wird noch die Backend-Abfrage eingefügt und der Text des text-fields angepasst
    }
}
