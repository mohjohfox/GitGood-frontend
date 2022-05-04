import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Player} from '../../../model/player';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {

    @Input()
    playersAsArray: Player[];


    change(index, item){
        console.log(item.points);
        return item.points; 
     }
}
