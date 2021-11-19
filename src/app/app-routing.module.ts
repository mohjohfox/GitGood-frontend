import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/pages/list-view/list-view.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list-view',
        pathMatch: 'full',
    },
    {
        path: 'list-view',
        component: ListViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
