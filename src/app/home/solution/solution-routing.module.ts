import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionPage } from './solution.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionPage,
    children: [
      {
        path: 'sys-progress',
        loadChildren: () => import('./sys-progress/sys-progress.module').then( m => m.SysProgressPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionPageRoutingModule {}
