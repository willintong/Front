import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLoginComponent } from './product-login.component';

describe('ProductLoginComponent', () => {
  let component: ProductLoginComponent;
  let fixture: ComponentFixture<ProductLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
