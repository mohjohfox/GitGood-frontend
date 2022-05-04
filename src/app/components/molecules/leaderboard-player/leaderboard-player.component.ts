import {Component, Input, Output} from '@angular/core';
import {Player} from '../../../model/player';

@Component({
  selector: 'app-leaderboard-player',
  templateUrl: './leaderboard-player.component.html',
})
export class LeaderboardPlayerComponent {

  @Input()
  label: number;
  @Input()
  name: string;

}

