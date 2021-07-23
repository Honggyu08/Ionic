import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicSurveyPage } from './basic-survey.page';

const routes: Routes = [
  {
    path: '',
    component: BasicSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicSurveyPageRoutingModule {}
