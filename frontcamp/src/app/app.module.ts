import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainViewComponent } from './routeComponents/main-view/main-view.component';
import { NotFoundComponent } from './routeComponents/not-found/not-found.component';
import { LogoComponent } from './components/logo/logo.component';
import { ControlsBarComponent } from './components/controls-bar/controls-bar.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { DetailViewComponent } from './routeComponents/detail-view/detail-view.component';
import { FormComponent } from './components/form/form.component';
import { EditViewComponent } from './routeComponents/edit-view/edit-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainViewComponent,
    NotFoundComponent,
    LogoComponent,
    ControlsBarComponent,
    SelectComponent,
    ButtonComponent,
    FilterComponent,
    CardComponent,
    ListComponent,
    DetailViewComponent,
    FormComponent,
    EditViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
