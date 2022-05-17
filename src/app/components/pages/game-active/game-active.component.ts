import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerScoreComponent } from '../../atoms/player-score/player-score.component';
import { DartboardComponent } from '../../organisms/dartboard/dartboard-component';
import { LeaderboardComponent } from '../../organisms/leaderboard/leaderboard.component';
import {GameService} from '../../../services/game.service';

@Component({
    selector: 'app-game-running',
    templateUrl: './game-active.component.html',
    styleUrls: ['./game-active.component.css'],
})
export class GameActiveComponent implements AfterViewInit {
  @ViewChild('first') firstScore!: PlayerScoreComponent;
  @ViewChild('second') secondScore!: PlayerScoreComponent;
  @ViewChild('third') thirdScore!: PlayerScoreComponent;
  @ViewChild(DartboardComponent) dartboard!: DartboardComponent;
  @ViewChild(LeaderboardComponent) leaderboard!: LeaderboardComponent;

  private readonly gameId: string;

    constructor(
      private readonly router: Router,
      activatedRoute: ActivatedRoute,
      private gameService: GameService,
    ) {
      this.gameId = activatedRoute.snapshot.paramMap.get('gameId');
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.firstScore.points = '';
            this.secondScore.points = '';
            this.thirdScore.points = '';

            this.gameService.getGameFromServer(this.gameId).subscribe(value => {this.leaderboard.playersAsArray = value.players; });
            });

        document.querySelector('#dartboard').addEventListener('throw', (d) => {
            const scoreDetails = (d as CustomEvent).detail;
            this.setPointsToScoreComponent(scoreDetails.score);
        });
    }

    submitRound() {
      this.fillEmptyFieldsWithNull();
      this.gameService.sendSubmitRound(this.gameId, [this.firstScore.points, this.secondScore.points, this.thirdScore.points])
      .subscribe(value => {
        this.leaderboard.playersAsArray = value.players;
        this.firstScore.points = '';
        this.secondScore.points = '';
        this.thirdScore.points = '';

        if (value.finished) {
          this.gameService.deleteGameById(this.gameId);
          this.router.navigate(['winner', this.gameId]);
        }
      });
  }

    removeThrow() {
        if (this.thirdScore.points.length !== 0) {
            this.thirdScore.points = '';
        } else if (this.secondScore.points.length !== 0) {
            this.secondScore.points = '';
        } else if (this.firstScore.points.length !== 0) {
            this.firstScore.points = '';
        }
    }

    goBack() {
      this.gameService.deleteGameById(this.gameId);
      this.router.navigate(['game-setup']);
    }

    private setPointsToScoreComponent(points) {
      const scoreComponent = this.whichPointField();

      if (scoreComponent !== undefined) {
        scoreComponent.points = points;
      }
    }

    private whichPointField(): PlayerScoreComponent {
      if (this.firstScore.points.length === 0) {
        return this.firstScore;
      } else if (this.secondScore.points.length === 0) {
        return this.secondScore;
      } else if (this.thirdScore.points.length === 0) {
        return this.thirdScore;
      }
      return undefined;
    }

    private fillEmptyFieldsWithNull() {
      if (this.firstScore.points.length === 0) {
        this.firstScore.points = '0';
      }

      if (this.secondScore.points.length === 0) {
        this.secondScore.points = '0';
      }

      if (this.thirdScore.points.length === 0) {
        this.thirdScore.points = '0';
      }
    }
}
