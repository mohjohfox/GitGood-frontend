import {Component, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {DarkModeService} from 'angular-dark-mode';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `<input
    type="checkbox"
    [checked]="darkMode$ | async"
  (change)="onToggle()"
    />`,
})
export class DarkModeToggleComponent {
  @Input()
  @Output()
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {
  }
  @Output()
  onToggle(): void {
    this.darkModeService.toggle();
  }
}
