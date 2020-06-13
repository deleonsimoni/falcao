import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { GoogleMaps, GoogleMap, Marker, GoogleMapsEvent } from '@ionic-native/google-maps/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  private map: GoogleMap;

  constructor(
    private platform: Platform,
    private geolocation: Geolocation
  ) { }

  async ngOnInit() {
    await this.platform.ready();

    this.loadMap();
  }

  private getLocation(): Promise<any> {
    return this.geolocation.getCurrentPosition();
  }

  private async loadMap() {
    const { coords } = await this.getLocation();

    const markOption = {
      camera: {
        target: {
          lat: coords.latitude,
          lng: coords.longitude,
        },
        zoom: 18,
        tilt: 30
      }
    };

    console.log(markOption);

    this.map = GoogleMaps.create('map_canvas', markOption);

    this.addMark(coords);
  }

  private addMark(coords) {
    const marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: coords.latitude,
        lng: coords.longitude
      }
    });

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

}
