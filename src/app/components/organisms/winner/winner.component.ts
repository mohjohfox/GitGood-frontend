import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './winner.component.html'
})
export class WinnerComponent {

  constructor(private readonly router: Router) {}

  goBack() {
    this.router.navigate(['game-setup']);
  }

}
