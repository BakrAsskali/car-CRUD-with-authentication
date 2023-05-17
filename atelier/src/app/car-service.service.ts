import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModule } from './car/car.module';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  getCarById(id_car: any) {
    console.log(this.url + '/car/' + id_car);
    return this.http.get(this.url + '/car/' + id_car, this.httpOptions);
  }
  // url principal
  url: string = 'http://127.0.0.1:5000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  saveCare(car: CarModule) {
    console.log(this.url + '/savecar');

    console.log('car service' + car);

    return this.http.post(this.url + '/savecar', car, this.httpOptions);
  }
  getAllcars(): Observable<CarModule[]> {
    return this.http.get<CarModule[]>(this.url + '/cars', this.httpOptions);
  }

  updateCar(car: CarModule): Observable<CarModule[]> {
    return this.http.put<CarModule[]>(
      this.url + '/updatecar/' + car.id_car,
      car,
      this.httpOptions
    );
  }

  deleteCar(id_car: number): Observable<CarModule[]> {
    return this.http.delete<CarModule[]>(
      this.url + '/deletecar/' + id_car,
      this.httpOptions
    );
  }
}
