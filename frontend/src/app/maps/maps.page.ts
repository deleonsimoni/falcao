import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';

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

  public resultRoute;
  public showPreview = false;
  public showSteps = false;
  public watch$: Observable<any>;
  private directionsService: any;
  private directionsRenderer: any;

  constructor(
    private geolocation: Geolocation,
    private platform: Platform
  ) {

    this.directionsService = new google.maps.DirectionsService;
    this.directionsRenderer = new google.maps.DirectionsRenderer;
    this.watch$ = this.geolocation.watchPosition();

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap();
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
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);
    this.directionsRenderer.setMap(this.map);

    this.addMarker();
  }

  private addMarker() {

    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
  }

  public calculateNavigation(): void {

    const request = {
      origin: 'Av. Prof. João Brasil, 870 - Fonseca',
      destination: 'Av. A, 410 - Valverde, Nova Iguaçu - RJ, 26290-375',
      travelMode: 'DRIVING'
    };

    this.directionsService.route(request, (res, status) => {
      console.log(res);
      if (status === 'OK') {
        this.resultRoute = res;
        this.showPreview = true;
        this.directionsRenderer.setDirections(res);
      }
    });
  }

  public showRoute(ev: any) {
    if (ev.initRoute) {
      console.log(ev.initRoute);
      this.showPreview = false;
      this.showSteps = true;
      this.directionsRenderer.setPanel(this.directionsPanel.nativeElement);
    }
  }
}
