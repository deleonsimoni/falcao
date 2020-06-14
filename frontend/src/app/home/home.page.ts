import { Component, OnInit } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  url: SafeResourceUrl;
  showFalcon = false;
  showMarkers = false;
  de: string;
  ate: string;


  constructor(
    private brightness: Brightness,
    private screenOrientation: ScreenOrientation,
    private sanitize: DomSanitizer
  ) { }

  ngOnInit() {
    const address = "https://embed.waze.com/iframe?zoom=12&lat=45.6906304&lon=-120.810983"
    this.url = this.sanitize.bypassSecurityTrustResourceUrl(address);

  }

  falcon(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY);
    const brightnessValue = 1;
    this.brightness.setBrightness(brightnessValue);
    this.showFalcon = true;
  }

  verifyRoute(){
    if(this.de && this.ate){
      this.showMarkers = true;
    }
  }

}
