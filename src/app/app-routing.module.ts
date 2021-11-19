import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/pages/list-view/list-view.component';
import {GameSetupComponent} from './components/pages/game-setup/game-setup.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'game-setup',
        pathMatch: 'full',
    },
    {
        path: 'list-view',
        component: ListViewComponent,
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
