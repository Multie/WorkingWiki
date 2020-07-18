import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikiPageEditPage } from './wiki-page-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WikiPageEditPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class WikiPageEditPageRoutingModule { }
