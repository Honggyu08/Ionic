import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QnAPage } from './qn-a.page';

const routes: Routes = [
  {
    path: '',
    component: QnAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QnAPageRoutingModule {}
