import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListVehicleComponent
  ],
  declarations: [
    ListVehicleComponent
  ]
})
export class VehicleModule { }
