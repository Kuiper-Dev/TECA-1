import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopUpPage } from './pop-up.page';

describe('PopUpPage', () => {
  let component: PopUpPage;
  let fixture: ComponentFixture<PopUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
