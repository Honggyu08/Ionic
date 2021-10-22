import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPagePage } from './my-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyPagePage
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'my-reviews',
    loadChildren: () => import('./my-reviews/my-reviews.module').then( m => m.MyReviewsPageModule)
  },
  {
    path: 'points',
    loadChildren: () => import('./points/points.module').then( m => m.PointsPageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./purchase/purchase.module').then( m => m.PurchasePageModule)
  },
  {
    path: 'refund',
    loadChildren: () => import('./refund/refund.module').then( m => m.RefundPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPagePageRoutingModule {}
