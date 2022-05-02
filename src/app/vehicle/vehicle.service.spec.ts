/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleService } from './vehicle.service';

describe('Service: Vehicle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
});
