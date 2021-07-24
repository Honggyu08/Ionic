import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorePage } from './store.page';

const routes: Routes = [
  {
    path: '',
    component: StorePage
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
    path: 'diary',
    loadChildren: () => import('../diary/diary.module').then(m => m.DiaryPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorePageRoutingModule {}
