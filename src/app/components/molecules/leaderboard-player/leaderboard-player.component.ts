import {Component, Input, Output} from '@angular/core';
import {Player} from '../../../model/player';

@Component({
  selector: 'app-leaderboard-player',
  templateUrl: './leaderboard-player.component.html',
})
export class LeaderboardPlayerComponent {

  @Input()
  label: string;
  @Input()
  player: Player;

}

