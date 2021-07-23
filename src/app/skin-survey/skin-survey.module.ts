import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinSurveyPageRoutingModule } from './skin-survey-routing.module';

import { SkinSurveyPage } from './skin-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinSurveyPageRoutingModule
  ],
  declarations: [SkinSurveyPage]
})
export class SkinSurveyPageModule {}
