import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  {

    path: 'details/:id',
    component: DetailsComponent
  },
  {

    path: 'list/details/:id',
    component: DetailsComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: '*',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
