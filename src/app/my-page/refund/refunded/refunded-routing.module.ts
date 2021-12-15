import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundedPage } from './refunded.page';

const routes: Routes = [
  {
    path: '',
    component: RefundedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundedPageRoutingModule {}
