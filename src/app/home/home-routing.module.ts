import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },  
  {
    path: 'ideas',
    loadChildren: () => import('./ideas/ideas.module').then( m => m.IdeasPageModule)
  },
  {
    path: 'solution',
    loadChildren: () => import('./solution/solution.module').then( m => m.SolutionPageModule)
  },
  {
    path: 'diary',
    loadChildren: () => import('./diary/diary.module').then( m => m.DiaryPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
