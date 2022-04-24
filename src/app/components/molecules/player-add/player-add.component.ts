import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Player} from '../../../model/player';

@Component({
    selector: 'app-player-add',
    templateUrl: './player-add.component.html',
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
    changePlayerName = new EventEmitter<string>();
}

type ButtonType = 'primary' | 'secondary';
