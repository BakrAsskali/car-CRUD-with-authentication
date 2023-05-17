import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css'],
})
export class DeleteCarComponent {
  constructor(private carservice: CarServiceService, private router: Router) {}

  id_car!: number;

  deleteCar() {
    this.carservice.deleteCar(this.id_car).subscribe();
    this.router.navigate(['/cars']);
  }
}
