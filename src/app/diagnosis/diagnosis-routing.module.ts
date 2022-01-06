import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosisPage } from './diagnosis.page';

const routes: Routes = [
  {
    path: 'diagnosis',
    component: DiagnosisPage,
    children: [
      {
        path: 'right',
        loadChildren: () => import('./right/right.module').then( m => m.RightPageModule)
      },
      {
        path: 'front',
        loadChildren: () => import('./front/front.module').then( m => m.FrontPageModule)
      },
      {
        path: 'left',
        loadChildren: () => import('./left/left.module').then( m => m.LeftPageModule)
      },
      {
        path: '',
        redirectTo: 'diagnosis/right',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'diagnosis/right',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosisPageRoutingModule {}
