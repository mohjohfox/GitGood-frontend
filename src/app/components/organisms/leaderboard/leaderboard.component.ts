import {Component} from '@angular/core';
import {Player} from '../../../model/player';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {

  playersAsArray: Player[];

}

