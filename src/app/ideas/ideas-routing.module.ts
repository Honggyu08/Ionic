import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeasPage } from './ideas.page';

const routes: Routes = [
  {
    path: '',
    component: IdeasPage
  }/*,  
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
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
    path: 'store',
    loadChildren: () => import('../store/store.module').then(m => m.StorePageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeasPageRoutingModule {}
