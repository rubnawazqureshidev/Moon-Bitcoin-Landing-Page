import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocompareComponent } from './cryptocompare.component';

describe('CryptocompareComponent', () => {
  let component: CryptocompareComponent;
  let fixture: ComponentFixture<CryptocompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
