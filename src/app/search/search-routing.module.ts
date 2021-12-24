import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: 'popular',
        loadChildren: () => import('./popular/popular.module').then( m => m.PopularPageModule)
      },
      {
        path: 'recent',
        loadChildren: () => import('./recent/recent.module').then( m => m.RecentPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
