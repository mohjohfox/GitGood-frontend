import {Component, Input, Output} from '@angular/core';
import {Player} from '../../../model/player';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css'],
})
export class PlayerScoreComponent {

  @Input()
  label: string;
  @Input()
  player: Player;

}
