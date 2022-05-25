import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/atoms/button/button.component';
import {GameSetupComponent} from './components/pages/game-setup/game-setup.component';
import {TextFieldComponent} from './components/atoms/text-field/text-field.component';
import {GameModeComponent} from './components/organisms/game-mode/game-mode.component';
import {PlayerAddComponent} from './components/molecules/player-add/player-add.component';
import {PlayerSelectionComponent} from './components/organisms/player-selection/player-selection.component';
import {GameActiveComponent} from './components/pages/game-active/game-active.component';
import {DartboardComponent} from './components/organisms/dartboard/dartboard-component';
import {LeaderboardComponent} from './components/organisms/leaderboard/leaderboard.component';
import {LeaderboardPlayerComponent} from './components/molecules/leaderboard-player/leaderboard-player.component';
import {PlayerScoreComponent} from './components/atoms/player-score/player-score.component';
import {WinnerComponent} from './components/pages/winner/winner.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        TextFieldComponent,
        GameSetupComponent,
        GameActiveComponent,
        GameModeComponent,
        PlayerAddComponent,
        PlayerSelectionComponent,
        DartboardComponent,
        LeaderboardComponent,
        LeaderboardPlayerComponent,
        PlayerScoreComponent,
        WinnerComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
