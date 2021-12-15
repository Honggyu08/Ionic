import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasePage } from './purchase.page';

const routes: Routes = [
  {
    path: '',
    component: PurchasePage,
    children: [
      {
        path: 'deposit',
        loadChildren: () => import('./deposit/deposit.module').then( m => m.DepositPageModule)
      },
      {
        path: 'delivery',
        loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
      },
      {
        path: 'delivered',
        loadChildren: () => import('./delivered/delivered.module').then( m => m.DeliveredPageModule)
      },
      {
        path: 'purchased',
        loadChildren: () => import('./purchased/purchased.module').then( m => m.PurchasedPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasePageRoutingModule {}
