import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaSubmitPageRoutingModule } from './idea-submit-routing.module';

import { IdeaSubmitPage } from './idea-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaSubmitPageRoutingModule
  ],
  declarations: [IdeaSubmitPage]
})
export class IdeaSubmitPageModule {}
