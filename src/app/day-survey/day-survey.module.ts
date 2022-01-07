import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaySurveyPageRoutingModule } from './day-survey-routing.module';

import { DaySurveyPage } from './day-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaySurveyPageRoutingModule
  ],
  declarations: [DaySurveyPage]
})
export class DaySurveyPageModule {}
