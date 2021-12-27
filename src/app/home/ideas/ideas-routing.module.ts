import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeasPage } from './ideas.page';

const routes: Routes = [
  {
    path: '',
    component: IdeasPage,
    children: [
      {
        path: 'idea-explain',
        loadChildren: () => import('./idea-explain/idea-explain.module').then( m => m.IdeaExplainPageModule)
      },
      {
        path: 'idea-submit',
        loadChildren: () => import('./idea-submit/idea-submit.module').then( m => m.IdeaSubmitPageModule)
      },
      {
        path: 'my-idea',
        loadChildren: () => import('./my-idea/my-idea.module').then( m => m.MyIdeaPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeasPageRoutingModule {}
