import {Player} from './player';
import {GameMode} from './gamemode';

export class Game {
  gameId: string;
  players: Player[];
  gameMode: GameMode;
  player: Player;


  constructor(players: Player[], gameMode: GameMode) {
    this.players = players;
    this.gameMode = gameMode;
  }

}

