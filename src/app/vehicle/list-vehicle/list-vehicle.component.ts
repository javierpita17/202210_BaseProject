import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  public vehicles: Array<Vehicle> = [];

  public countRenault: number = 0;
  public countChevrolet: number = 0;
  public countNissan: number = 0;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicles();
  }


  getVehicles():void{
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.countRenault = this.vehicles.filter(vehicle => vehicle.marca === 'Renault').length;
      this.countChevrolet = this.vehicles.filter(vehicle => vehicle.marca === 'Chevrolet').length;
      this.countNissan = this.vehicles.filter(vehicle => vehicle.marca === 'Nissan').length;
    }

    )
  }




}
