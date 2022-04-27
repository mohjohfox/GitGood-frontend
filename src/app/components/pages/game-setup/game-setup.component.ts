import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../../services/todo.service';
import {PlayerService} from '../../../services/player.service';
import {Game} from '../../../model/game';
import {GameModeComponent} from '../../organisms/game-mode/game-mode.component';
import {PlayerSelectionComponent} from '../../organisms/player-selection/player-selection.component';
import {GameMode} from '../../../model/gamemode';
import {Player} from '../../../model/player';

@Component({
    selector: 'app-game-setup',
    templateUrl: './game-setup.component.html',
})
export class GameSetupComponent implements OnInit {

  @ViewChild(PlayerSelectionComponent) playerSelectionComponent: PlayerSelectionComponent;
  @ViewChild(GameModeComponent) gameModeComponent: GameModeComponent;

    constructor(private readonly playerService: PlayerService,
                private readonly router: Router) {
    }

    async ngOnInit() {
        // this.players = await this.playerService.getAll();
    }


    async startGame() {
      const game: Game = new Game(this.playerSelectionComponent.playersAsArray, this.gameModeComponent.getGameMode());

      if (this.checkForValidGame(this.gameModeComponent.getGameMode(), this.playerSelectionComponent.playersAsArray)) {

      } else {
        alert('Could not start game. Please insert valid player names and select one gamemode');
      }
    }

    private checkForValidGame(gamemode: GameMode, players: Player[]) {
      return this.checkForValidGameMode(gamemode) && players.length > 0 && this.checkForValidNames(players);
    }

  private checkForValidNames(players: Player[]): boolean {
      return players.every(item => this.matchesExpression(item.name));
  }

  private matchesExpression(name: string): boolean {
      return name.match('[^a-z0-9 ]') == null;
  }

  private checkForValidGameMode(gamemode: GameMode): boolean {
    return gamemode != null;
  }
}
