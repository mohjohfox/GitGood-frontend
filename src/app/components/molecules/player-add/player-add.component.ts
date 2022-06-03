import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Player} from '../../../model/player';

@Component({
    selector: 'app-player-add',
    templateUrl: './player-add.component.html',
    styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent {

    @Input()
    label: string;
    @Input()
    type: ButtonType = 'primary';
    @Input()
    player: Player;
    @Output()
    removePlayer = new EventEmitter<number>();
    @Output()
    changePlayerName = new EventEmitter<any>();
}

type ButtonType = 'primary' | 'secondary';
