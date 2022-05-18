export class Player {
  id?: number;
  name: string;
  points: number;
  thrownPoints: number[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.points = 0;
  }
}
