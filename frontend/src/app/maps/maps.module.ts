import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';
import { TravelPreviewComponent } from '../components/travel-preview/travel-preview.component';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule
  ],
  declarations: [
    MapsPage,
    TravelPreviewComponent
  ],
  providers: [
    Geolocation
  ]
})
export class MapsPageModule { }
