import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  private map: GoogleMap;

  constructor(
    private platform: Platform
  ) { }

  async ngOnInit() {
    await this.platform.ready();

    this.loadMap();
  }

  private loadMap() {
    const markOption = {
      camera: {
        target: {
          lat: 0,
          lng: 0,
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas');
  }

}
