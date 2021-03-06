import {Player} from './player';
import {GameMode} from './gamemode';

export class Game {
  currentPlayer: Player;
  finished: boolean;
  gameMode: GameMode;
  id: string;
  players: Player[];

  constructor(players: Player[], gameMode: GameMode) {
    this.players = players;
    this.gameMode = gameMode;
  }

}

