import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedbyComponent } from './trustedby.component';

describe('TrustedbyComponent', () => {
  let component: TrustedbyComponent;
  let fixture: ComponentFixture<TrustedbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustedbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
