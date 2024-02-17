import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotovoltaicComponent } from './photovoltaic.component';

describe('PhotovoltaicComponent', () => {
  let component: PhotovoltaicComponent;
  let fixture: ComponentFixture<PhotovoltaicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotovoltaicComponent]
    });
    fixture = TestBed.createComponent(PhotovoltaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
