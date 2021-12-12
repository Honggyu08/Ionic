import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPage } from './cart.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage,
    children: [
      {
        path: 'heart-list',
        loadChildren: () => import('./heart-list/heart-list.module').then( m => m.HeartListPageModule)
      },
      {
        path: 'cart-list',
        loadChildren: () => import('./cart-list/cart-list.module').then( m => m.CartListPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}
