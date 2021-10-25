import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QnAPageRoutingModule } from './qn-a-routing.module';

import { QnAPage } from './qn-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QnAPageRoutingModule
  ],
  declarations: [QnAPage]
})
export class QnAPageModule {}
