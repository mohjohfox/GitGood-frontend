import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/atoms/button/button.component';
import { ItemViewComponent } from './components/pages/item-view/item-view.component';
import { ItemEditComponent } from './components/pages/item-edit/item-edit.component';
import { ListViewComponent } from './components/pages/list-view/list-view.component';
import {GameSetupComponent} from './components/pages/game-setup/game-setup.component';
import {TextFieldComponent} from './components/atoms/text-field/text-field.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        TextFieldComponent,
        GameSetupComponent,
        ItemViewComponent,
        ItemEditComponent,
        ListViewComponent,
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
