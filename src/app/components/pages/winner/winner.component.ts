import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../services/game.service';
import {isEmpty} from 'rxjs';

@Component({
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css'],
})
export class WinnerComponent implements OnDestroy {
  @Input()
  winner: string;
  gameId: string;

  constructor(private readonly router: Router, activatedRoute: ActivatedRoute, private gameService: GameService) {
    this.gameId = activatedRoute.snapshot.paramMap.get('gameId');
    this.gameService.getGameFromServer(this.gameId).subscribe(value => {
      this.winner = value.currentPlayer.name;
    });
  }


  ngOnDestroy() {
    this.gameService.deleteGameById(this.gameId);
  }

  goBack() {
    this.router.navigate(['game-setup']);
  }

}
