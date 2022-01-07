import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaySurveyPage } from './day-survey.page';

const routes: Routes = [
  {
    path: '',
    component: DaySurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaySurveyPageRoutingModule {}
