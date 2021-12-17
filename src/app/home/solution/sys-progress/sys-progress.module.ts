import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SysProgressPageRoutingModule } from './sys-progress-routing.module';

import { SysProgressPage } from './sys-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SysProgressPageRoutingModule
  ],
  declarations: [SysProgressPage]
})
export class SysProgressPageModule {}
