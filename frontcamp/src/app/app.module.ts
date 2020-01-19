import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoComponent } from './logo/logo.component';
import { ControlsBarComponent } from './controls-bar/controls-bar.component';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { FilterComponent } from './filter/filter.component';
import { ArticleComponent } from './article/article.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';

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
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
