import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameSetupComponent} from './components/pages/game-setup/game-setup.component';
import {GameActiveComponent} from './components/pages/game-active/game-active.component';
import {WinnerComponent} from './components/organisms/winner/winner.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'game-setup',
        pathMatch: 'full',
    },
    {
      path: 'game-setup',
      component: GameSetupComponent,
    },
    {
      path: 'game/:gameId',
      component: GameActiveComponent,
    },
    {
      path: 'winner/:gameId',
      component: WinnerComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
