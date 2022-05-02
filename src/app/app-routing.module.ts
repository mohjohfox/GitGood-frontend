import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameSetupComponent} from './components/pages/game-setup/game-setup.component';
import {GameActiveComponent} from './components/pages/game-active/game-active.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
