import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPage } from './setting.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPage,
    children: [
      {
        path: 'privacy',
        loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
      },
      {
        path: 'policy',
        loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
      },
      {
        path: 'sign-out',
        loadChildren: () => import('./sign-out/sign-out.module').then( m => m.SignOutPageModule)
      },
      {
        path: 'bluetooth',
        loadChildren: () => import('./bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPageRoutingModule {}
