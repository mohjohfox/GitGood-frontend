import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {GameModeService} from '../../../services/gamemode.service';
import {TextFieldComponent} from '../../atoms/text-field/text-field.component';
import {GameMode} from '../../../model/gamemode';

@Component({
    selector: 'app-game-mode',
    templateUrl: './game-mode.component.html',
})
export class GameModeComponent implements OnInit {
  @ViewChild(TextFieldComponent) ruleTextField!: TextFieldComponent;

  private gamemode: GameMode;

    constructor(private readonly gameModeService: GameModeService,
                private readonly router: Router) {
    }

    async ngOnInit() {

    }

    showRules(gameModeName: string) {
        this.gameModeService.getGameModeByName(gameModeName).subscribe( response => {
        this.ruleTextField.text = response.description;
        this.gamemode = response;
      });
    }

    getGameMode(): GameMode {
     return this.gamemode;
    }

}
