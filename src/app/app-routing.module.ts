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
    //기본 주소의 위치를 basic-surey로 지정
  {
    path: 'basic-survey',
    loadChildren: () => import('./basic-survey/basic-survey.module').then( m => m.BasicSurveyPageModule)
  },
  {
    path: 'skin-survey',
    loadChildren: () => import('./skin-survey/skin-survey.module').then( m => m.SkinSurveyPageModule)
  },
  {
    path: 'skinnn-survey2',
    loadChildren: () => import('./skinnn-survey2/skinnn-survey2.module').then( m => m.SkinnnSurvey2PageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'my-page',
    loadChildren: () => import('./my-page/my-page.module').then( m => m.MyPagePageModule)
  },
  {
    path: 'notice',
    loadChildren: () => import('./notice/notice.module').then( m => m.NoticePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'best',
    loadChildren: () => import('./best/best.module').then( m => m.BestPageModule)
  },
  {
    path: 'qn-a',
    loadChildren: () => import('./qn-a/qn-a.module').then( m => m.QnAPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'expert',
    loadChildren: () => import('./expert/expert.module').then( m => m.ExpertPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }