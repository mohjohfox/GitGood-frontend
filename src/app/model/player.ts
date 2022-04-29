export class Player {
  playerId?: number;
  playerName: string;
  points: number;

  constructor(id: number, name: string) {
    this.playerId = id;
    this.playerName = name;
  }
}
