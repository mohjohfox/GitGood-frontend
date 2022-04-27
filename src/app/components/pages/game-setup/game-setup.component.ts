import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
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
    selector: 'app-game-setup',
    templateUrl: './game-setup.component.html',
})
export class GameSetupComponent implements OnInit {

  @ViewChild(PlayerSelectionComponent) playerSelectionComponent: PlayerSelectionComponent;
  @ViewChild(GameModeComponent) gameModeComponent: GameModeComponent;

    constructor(private readonly playerService: PlayerService, private readonly gamesetupService: GamesetupService,
                private readonly router: Router) {
    }

    async ngOnInit() {
        // this.players = await this.playerService.getAll();
    }


    async startGame() {
      const playersAsArray = this.playerSelectionComponent.playersAsArray;
      const gameMode = this.gameModeComponent.getGameMode();

      if (this.checkForValidGame(gameMode, playersAsArray)) {
        const game: Game = new Game(playersAsArray, gameMode);

        this.gamesetupService.sendGameToServer(game).subscribe(response => {
            console.log('Weiterleitung hier!');
        });
      } else {
        alert('Could not start game. Please insert valid player names and select one gamemode');
      }
    }

    private checkForValidGame(gamemode: GameMode, players: Player[]) {
      return this.checkForValidGameMode(gamemode) && players.length > 0 && this.checkForValidNames(players);
    }

  private checkForValidNames(players: Player[]): boolean {
      return players.every(item => this.matchesExpression(item.playerName));
  }

  private matchesExpression(name: string): boolean {
      return name.length > 0 && name.match('[^a-z0-9 ]') == null;
  }

  private checkForValidGameMode(gamemode: GameMode): boolean {
    return gamemode != null;
  }
}
