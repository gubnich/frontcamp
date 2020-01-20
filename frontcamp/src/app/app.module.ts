import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoComponent } from './components/logo/logo.component';
import { ControlsBarComponent } from './components/controls-bar/controls-bar.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { FilterComponent } from './components/filter/filter.component';
import { ArticleComponent } from './components/article/article.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { FormComponent } from './components/form/form.component';
import { EditViewComponent } from './edit-view/edit-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainViewComponent,
    ContactInfoComponent,
    NotFoundComponent,
    LogoComponent,
    ControlsBarComponent,
    SelectComponent,
    ButtonComponent,
    FilterComponent,
    ArticleComponent,
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
