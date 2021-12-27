import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaExplainPageRoutingModule } from './idea-explain-routing.module';

import { IdeaExplainPage } from './idea-explain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaExplainPageRoutingModule
  ],
  declarations: [IdeaExplainPage]
})
export class IdeaExplainPageModule {}
