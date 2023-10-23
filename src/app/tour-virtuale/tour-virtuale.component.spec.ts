import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVirtualeComponent } from './tour-virtuale.component';

describe('TourVirtualeComponent', () => {
  let component: TourVirtualeComponent;
  let fixture: ComponentFixture<TourVirtualeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourVirtualeComponent]
    });
    fixture = TestBed.createComponent(TourVirtualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
