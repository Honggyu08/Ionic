import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'ideas',
        loadChildren: () => import('./ideas/ideas.module').then( m => m.IdeasPageModule)
      },
      {
        path: 'solution',
        loadChildren: () => import('./solution/solution.module').then( m => m.SolutionPageModule)
      },
      {
        path: 'home-tab',
        loadChildren: () => import('./home-tab/home-tab.module').then( m => m.HomeTabPageModule)
      },
      {
        path: 'diary',
        loadChildren: () => import('./diary/diary.module').then( m => m.DiaryPageModule)
      },
      {
        path: 'store',
        loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
      },
      // 홈에서 탭들로 이동할 수 있도록 자식으로 설정

      {
        path: '',
        redirectTo: 'home/home-tab',
        pathMatch: 'full'
      }
      //기본 탭을 home-tab으로 설정 
    ]
  },   
  {
    path: '',
    redirectTo: 'home/home-tab',
    pathMatch: 'full'
  } //기본 탭을 home-tab으로 설정 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
