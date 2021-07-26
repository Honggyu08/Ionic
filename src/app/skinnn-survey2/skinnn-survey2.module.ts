import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinnnSurvey2PageRoutingModule } from './skinnn-survey2-routing.module';

import { SkinnnSurvey2Page } from './skinnn-survey2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinnnSurvey2PageRoutingModule
  ],
  declarations: [SkinnnSurvey2Page]
})
export class SkinnnSurvey2PageModule {}
