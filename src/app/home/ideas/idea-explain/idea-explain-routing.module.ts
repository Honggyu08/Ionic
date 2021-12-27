import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaExplainPage } from './idea-explain.page';

const routes: Routes = [
  {
    path: '',
    component: IdeaExplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaExplainPageRoutingModule {}
