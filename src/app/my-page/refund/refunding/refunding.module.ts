import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundingPageRoutingModule } from './refunding-routing.module';

import { RefundingPage } from './refunding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefundingPageRoutingModule
  ],
  declarations: [RefundingPage]
})
export class RefundingPageModule {}
