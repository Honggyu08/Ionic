import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundingPage } from './refunding.page';

const routes: Routes = [
  {
    path: '',
    component: RefundingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundingPageRoutingModule {}
