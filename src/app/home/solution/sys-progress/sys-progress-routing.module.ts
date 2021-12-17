import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SysProgressPage } from './sys-progress.page';

const routes: Routes = [
  {
    path: '',
    component: SysProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysProgressPageRoutingModule {}
