import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'basic-survey',
    pathMatch: 'full'
  },
  {
    path: 'basic-survey',
    loadChildren: () => import('./basic-survey/basic-survey.module').then( m => m.BasicSurveyPageModule)
  },
  {
    path: 'skin-survey',
    loadChildren: () => import('./skin-survey/skin-survey.module').then( m => m.SkinSurveyPageModule)
  },  {
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
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
