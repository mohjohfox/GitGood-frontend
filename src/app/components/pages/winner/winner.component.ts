import {Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../services/game.service';
import {LeaderboardComponent} from '../../organisms/leaderboard/leaderboard.component';
import {Game} from '../../../model/game';

@Component({
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css'],
})
export class WinnerComponent implements OnDestroy {
  @Input()
  winner: string;
  gameId: string;
  @ViewChild(LeaderboardComponent) leaderboard!: LeaderboardComponent;

  constructor(private readonly router: Router, activatedRoute: ActivatedRoute, private gameService: GameService) {
    this.gameId = activatedRoute.snapshot.paramMap.get('gameId');
    this.gameService.getGameFromServer(this.gameId).subscribe(game => {
      this.sortLeaderboardAccordingToGameMode(game);
    });
  }


  private sortLeaderboardAccordingToGameMode(value: Game) {
    if (value.gameMode.name === '301' || value.gameMode.name === '501' ) {
      this.leaderboard.playersAsArray = value.players.sort((p1, p2) => p1.points - p2.points);
      this.winner = this.leaderboard.playersAsArray[0].name;
    }
  }

  ngOnDestroy() {
    this.gameService.deleteGameById(this.gameId);
  }

  goBack() {
    this.router.navigate(['game-setup']);
  }

}
