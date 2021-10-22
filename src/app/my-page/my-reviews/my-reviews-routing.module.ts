import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyReviewsPage } from './my-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: MyReviewsPage,
    children: [
      {
        path: 'review',
        loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
      },
      {
        path: 'idea',
        loadChildren: () => import('./idea/idea.module').then( m => m.IdeaPageModule)
      },
      {
        path: 'diary',
        loadChildren: () => import('./diary/diary.module').then( m => m.DiaryPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyReviewsPageRoutingModule {}
