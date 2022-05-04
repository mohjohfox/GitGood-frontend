import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import {Game} from '../../../model/game';
import { PlayerScoreComponent } from '../../atoms/player-score/player-score.component';
import { DartboardComponent } from '../../organisms/dartboard/dartboard-component';
import { LeaderboardComponent } from '../../organisms/leaderboard/leaderboard.component';

@Component({
    selector: 'app-game-running',
    templateUrl: './game-active.component.html',
    styleUrls: ['./game-active.css'],
})
export class GameActiveComponent implements OnInit, AfterViewInit {
  @ViewChild('first') firstScore!: PlayerScoreComponent;
  @ViewChild('second') secondScore!: PlayerScoreComponent;
  @ViewChild('third') thirdScore!: PlayerScoreComponent;
  @ViewChild(DartboardComponent) dartboard!: DartboardComponent;
  @ViewChild(LeaderboardComponent) leaderboard!: LeaderboardComponent;

  private gameId: string;
  private game: Game;

    constructor(
      private readonly router: Router,
      activatedRoute: ActivatedRoute
    ) {
       this.gameId = activatedRoute.snapshot.paramMap.get('gameId');
       // this.game zuweisen
    }
    ngAfterViewInit() {
        setTimeout(() => {
            // Your Code
            this.firstScore.points = '';
            this.secondScore.points = '';
            this.thirdScore.points = '';

            /*
            * Test gameobject
            * Game wird zukünftig vom Backend angefragt
            * */
            this.game = new Game([new Player(1234, 'teasdas'), new Player(124, 'test2')], undefined);

            this.leaderboard.playersAsArray = this.game.players;
            });

        document.querySelector('#dartboard').addEventListener('throw', (d) => {
            const scoreDetails = (d as CustomEvent).detail;
            this.setPoints(scoreDetails.score);
        });
    }

    setPoints(points) {
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
      this.game.players[0].points = 14;
      this.leaderboard.playersAsArray = this.game.players;
    }

    async ngOnInit() {
        // this.players = await this.playerService.getAll();
    }


}
