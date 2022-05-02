import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../../services/todo.service';
import {PlayerService} from '../../../services/player.service';
import {Game} from '../../../model/game';
import {GameModeComponent} from '../../organisms/game-mode/game-mode.component';
import {PlayerSelectionComponent} from '../../organisms/player-selection/player-selection.component';
import {GameMode} from '../../../model/gamemode';
import {Player} from '../../../model/player';
import {GameModeService} from '../../../services/gamemode.service';
import {GamesetupService} from '../../../services/gamesetup.service';
import {HttpStatusCode} from '@angular/common/http';

@Component({
    selector: 'app-game-running',
    templateUrl: './game-active.component.html',
})
export class GameActiveComponent implements OnInit {

 // @ViewChild(PlayerSelectionComponent) playerSelectionComponent: PlayerSelectionComponent;
 // @ViewChild(GameModeComponent) gameModeComponent: GameModeComponent;
  private gameId: string;

    constructor(
                private readonly router: Router,
                activatedRoute: ActivatedRoute
    ) {
       this.gameId = activatedRoute.snapshot.paramMap.get('gameId');
    }

    async ngOnInit() {
        // this.players = await this.playerService.getAll();
    }


}
