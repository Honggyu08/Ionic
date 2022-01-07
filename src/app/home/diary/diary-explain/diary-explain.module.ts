import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryExplainPageRoutingModule } from './diary-explain-routing.module';

import { DiaryExplainPage } from './diary-explain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryExplainPageRoutingModule
  ],
  declarations: [DiaryExplainPage]
})
export class DiaryExplainPageModule {}
