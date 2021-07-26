import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinnnSurvey2Page } from './skinnn-survey2.page';

const routes: Routes = [
  {
    path: '',
    component: SkinnnSurvey2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinnnSurvey2PageRoutingModule {}
