import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyComponent } from './key.component';

describe('KeyComponent', () => {
  let component: KeyComponent;
  let fixture: ComponentFixture<KeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});