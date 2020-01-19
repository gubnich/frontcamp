import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailViewComponent } from './detail-view/detail-view.component';


const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'main', component: MainViewComponent },
  { path: 'detail/:id', component: DetailViewComponent },
  { path: 'contact', component: ContactInfoComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
