import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterModePageRoutingModule } from './enter-mode-routing.module';

import { EnterModePage } from './enter-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterModePageRoutingModule
  ],
  declarations: [EnterModePage]
})
export class EnterModePageModule {}
