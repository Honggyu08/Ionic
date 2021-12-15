import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundedPageRoutingModule } from './refunded-routing.module';

import { RefundedPage } from './refunded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefundedPageRoutingModule
  ],
  declarations: [RefundedPage]
})
export class RefundedPageModule {}
