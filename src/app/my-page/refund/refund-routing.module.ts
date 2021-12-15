import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundPage } from './refund.page';

const routes: Routes = [
  {
    path: '',
    component: RefundPage,
    children: [
      {
        path: 'refunding',
        loadChildren: () => import('./refunding/refunding.module').then( m => m.RefundingPageModule)
      },
      {
        path: 'refunded',
        loadChildren: () => import('./refunded/refunded.module').then( m => m.RefundedPageModule)
      },
      {
        path: 'cancel',
        loadChildren: () => import('./cancel/cancel.module').then( m => m.CancelPageModule)
      },
      {
        path: 'canceled',
        loadChildren: () => import('./canceled/canceled.module').then( m => m.CanceledPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundPageRoutingModule {}
