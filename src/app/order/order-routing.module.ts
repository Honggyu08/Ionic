import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage,
    children: [
      {
        path: 'check',
        loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
      },
      {
        path: 'refund',
        loadChildren: () => import('./refund/refund.module').then( m => m.RefundPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
