import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';


const routes: Routes = [
  { path: 'main', component: MainViewComponent },
  { path: 'contact', component: ContactInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
