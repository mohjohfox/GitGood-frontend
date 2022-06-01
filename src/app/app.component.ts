import { Component } from '@angular/core';
import {DarkModeService} from 'angular-dark-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.enable();
  }

}
