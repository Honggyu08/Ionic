import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryPage } from './diary.page';

const routes: Routes = [
  {
    path: 'diary',
    component: DiaryPage,
    children: [
      {
        path: 'diary-explain',
        loadChildren: () => import('./diary-explain/diary-explain.module').then( m => m.DiaryExplainPageModule)
      },
      {
        path: 'skin-diary',
        loadChildren: () => import('./skin-diary/skin-diary.module').then( m => m.SkinDiaryPageModule)
      },
      {
        path: '',
        redirectTo: 'diary/diary-explain',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'diary/diary-explain',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryPageRoutingModule {}
