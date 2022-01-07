import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinDiaryPage } from './skin-diary.page';

const routes: Routes = [
  {
    path: '',
    component: SkinDiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinDiaryPageRoutingModule {}
