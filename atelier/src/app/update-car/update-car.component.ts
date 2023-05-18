import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';
import { CarModule } from '../car/car.module';

export interface Car {
  model: string;
  hp: number;
  marque: string;
}

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css'],
})
export class UpdateCArComponent {
  car!: CarModule[];

  id_car!: number;

  model!: string;

  hp!: number;

  marque!: string;

  a!: number;

  constructor(private carService: CarServiceService, private router: Router) {}

  showMe() {
    let mycar = new CarModule();

    mycar.id_car = this.a;
    mycar.hp = this.hp;
    mycar.model = this.model;
    mycar.marque = this.marque;

    this.carService.getCarById(this.a).subscribe((data: any) => {
      this.car = data;
      this.id_car = this.car[0].id_car;
      this.hp = this.car[0].hp;
      this.model = this.car[0].model;
      this.marque = this.car[0].marque;
    });
  }

  updateCar() {
    let mycar = new CarModule();

    mycar.id_car = this.id_car;
    mycar.hp = this.hp;
    mycar.model = this.model;
    mycar.marque = this.marque;

    this.carService.updateCar(mycar).subscribe();
    window.location.href = '/cars';
  }

  displayedColumns: string[] = ['id', 'Model', 'Horse Power', 'Marque'];
  dataSource = this.car;
}
