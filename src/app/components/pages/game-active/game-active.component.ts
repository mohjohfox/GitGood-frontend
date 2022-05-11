import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import {Game} from '../../../model/game';
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

  private gameId: string;

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

    setPointsToScoreComponent(points) {
        const scoreComponent = this.whichPointField();

        if (scoreComponent !== undefined) {
            scoreComponent.points = points;
        }
    }

    whichPointField(): PlayerScoreComponent {
        if (this.firstScore.points.length === 0) {
            console.log(this.firstScore);
            return this.firstScore;
        } else if (this.secondScore.points.length === 0) {
            console.log(this.firstScore);
            return this.secondScore;
        } else if (this.thirdScore.points.length === 0) {
            console.log(this.thirdScore);
            return this.thirdScore;
        }
        return undefined;
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

    submitRound() {
      this.fillEmptyFieldsWithNull();
      this.gameService.sendSubmitRound(this.gameId, [this.firstScore.points, this.secondScore.points, this.thirdScore.points])
       .subscribe(value => {
         console.log(value);
         this.leaderboard.playersAsArray = value.players;
         this.firstScore.points = '';
         this.secondScore.points = '';
         this.thirdScore.points = '';
         console.log(value.isFinished);
         if (value.isFinished) {
           // Forward here to new page
           console.log('Congratulation! Game is over.');
         }
       });
    }

    fillEmptyFieldsWithNull() {
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
