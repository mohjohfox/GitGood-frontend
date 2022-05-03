import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Game} from '../../../model/game';

@Component({
    selector: 'app-game-running',
    templateUrl: './game-active.component.html',
})
export class GameActiveComponent implements OnInit {

 // @ViewChild(PlayerSelectionComponent) playerSelectionComponent: PlayerSelectionComponent;
 // @ViewChild(GameModeComponent) gameModeComponent: GameModeComponent;
  private gameId: string;
  private game: Game;

    constructor(
                private readonly router: Router,
                activatedRoute: ActivatedRoute
    ) {
       this.gameId = activatedRoute.snapshot.paramMap.get('gameId');
       // this.game zuweisen
    }

    async ngOnInit() {
        // this.players = await this.playerService.getAll();
    }


}
