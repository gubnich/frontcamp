import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './routeComponents/main-view/main-view.component';
import { NotFoundComponent } from './routeComponents/not-found/not-found.component';
import { DetailViewComponent } from './routeComponents/detail-view/detail-view.component';
import { EditViewComponent } from './routeComponents/edit-view/edit-view.component';
import { Guard } from './guards/app.guard';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'main', component: MainViewComponent },
  { path: 'detail/world', component: DetailViewComponent },
  { path: 'detail/local', component: DetailViewComponent },
  { path: 'create', component: EditViewComponent, canActivate: [Guard] },
  { path: 'edit', component: EditViewComponent, canActivate: [Guard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
