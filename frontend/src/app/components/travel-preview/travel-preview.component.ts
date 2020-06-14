import { Component, Input, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-travel-preview',
  templateUrl: './travel-preview.component.html',
  styleUrls: ['./travel-preview.component.scss'],
})
export class TravelPreviewComponent implements OnChanges {

  @Input() preview: any;
  public routeData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public initRoute: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const data = changes.preview.currentValue;
    console.log(data);
    this.routeData$.next(this.formatObject(data));
  }

  private formatObject(data) {
    return {
      address: data.routes[0].legs[0].end_address,
      distance: data.routes[0].legs[0].distance.text,
      time: data.routes[0].legs[0].duration.text
    };
  }

  public init() {
    this.initRoute.emit({ initRoute: true });
  }

}
