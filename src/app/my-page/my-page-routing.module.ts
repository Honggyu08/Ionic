import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPagePage } from './my-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyPagePage
  },  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPagePageRoutingModule {}
