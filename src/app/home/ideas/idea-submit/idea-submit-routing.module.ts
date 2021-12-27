import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaSubmitPage } from './idea-submit.page';

const routes: Routes = [
  {
    path: '',
    component: IdeaSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaSubmitPageRoutingModule {}
