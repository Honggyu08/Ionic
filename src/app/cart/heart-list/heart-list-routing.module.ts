import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeartListPage } from './heart-list.page';

const routes: Routes = [
  {
    path: '',
    component: HeartListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeartListPageRoutingModule {}
