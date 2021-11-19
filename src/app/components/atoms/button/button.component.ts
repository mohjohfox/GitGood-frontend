import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
})
export class ButtonComponent {

    @Input()
    label: string;
    @Input()
    type: ButtonType = 'primary';
    @Output()
    clicked = new EventEmitter<void>();
}

type ButtonType = 'primary' | 'secondary';
