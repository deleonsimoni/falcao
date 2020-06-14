import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterModePage } from './enter-mode.page';

describe('EnterModePage', () => {
  let component: EnterModePage;
  let fixture: ComponentFixture<EnterModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
