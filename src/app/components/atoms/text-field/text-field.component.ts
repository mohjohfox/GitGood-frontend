import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
})
export class TextFieldComponent {

    @Input()
    inputId: string;
    @Input()
    text = '';
}
