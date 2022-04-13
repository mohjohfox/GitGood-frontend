import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-player-add',
    templateUrl: './player-add.component.html',
})
export class PlayerAddComponent {

    @Input()
    label: string;
    @Input()
    type: ButtonType = 'primary';
    @Output()
    clicked = new EventEmitter<void>();
}

type ButtonType = 'primary' | 'secondary';
