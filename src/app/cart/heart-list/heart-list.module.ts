import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeartListPageRoutingModule } from './heart-list-routing.module';

import { HeartListPage } from './heart-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeartListPageRoutingModule
  ],
  declarations: [HeartListPage]
})
export class HeartListPageModule {}
