import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  private map: any;

  constructor(
    private geolocation: Geolocation,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap();
      this.startNavigating();
    });
  }

  private getLocation(): Promise<any> {
    return this.geolocation.getCurrentPosition();
  }

  private async loadMap() {
    const { coords } = await this.getLocation();

    const coordinates = new google.maps.LatLng(coords.latitude, coords.longitude);

    const options = {
      center: coordinates,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);
  }

  private startNavigating() {

    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
      origin: 'Av. Prof. João Brasil, 870 - Fonseca',
      destination: 'Av. A, 410 - Valverde, Nova Iguaçu - RJ, 26290-375',
      travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(res);
      } else {
        console.warn(status);
      }
    }, err => {
      console.log(err);
    });

  }

}
