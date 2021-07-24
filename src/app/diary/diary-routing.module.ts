import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryPage } from './diary.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryPage
  }/*,  
  {
    path: 'ideas',
    loadChildren: () => import('../ideas/ideas.module').then(m => m.IdeasPageModule)
  },
  {
    path: 'solution',
    loadChildren: () => import('../solution/solution.module').then(m => m.SolutionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('../store/store.module').then(m => m.StorePageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryPageRoutingModule {}
