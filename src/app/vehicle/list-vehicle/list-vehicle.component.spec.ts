/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from '@faker-js/faker';

import { ListVehicleComponent } from './list-vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehicle } from '../vehicle';

describe('ListVehicleComponent', () => {
  let component: ListVehicleComponent;
  let fixture: ComponentFixture<ListVehicleComponent>;

  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehicleComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehicleComponent);
    component = fixture.componentInstance;

    let vehicle1 = new Vehicle(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph()
    );

    let vehicle2 = new Vehicle(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph()
    )

    let vehicle3 = new Vehicle(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.paragraph(),
      faker.lorem.paragraph()
    )

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Vehicle -> should have Vehicle id', () => {
    const h4name = debug.query(By.css('h5'))
    const h4 = h4name.nativeElement;
    expect(h4.textContent).toEqual(component.vehicles[0].id);
  });

});
