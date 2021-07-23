import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicSurveyPageRoutingModule } from './basic-survey-routing.module';

import { BasicSurveyPage } from './basic-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicSurveyPageRoutingModule
  ],
  declarations: [BasicSurveyPage]
})
export class BasicSurveyPageModule {}
