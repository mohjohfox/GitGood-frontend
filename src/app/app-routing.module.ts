import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameSetupComponent} from './components/pages/game-setup/game-setup.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'game-setup',
        pathMatch: 'full',
    },
    {
      path: 'game-setup',
      component: GameSetupComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
