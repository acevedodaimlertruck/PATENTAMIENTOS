import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeDialogComponent } from './vehicle-type-dialog.component';

describe('VehicleTypeDialogComponent', () => {
  let component: VehicleTypeDialogComponent;
  let fixture: ComponentFixture<VehicleTypeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleTypeDialogComponent]
    });
    fixture = TestBed.createComponent(VehicleTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
