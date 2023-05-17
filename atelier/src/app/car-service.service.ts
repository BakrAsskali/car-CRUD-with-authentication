import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModule } from './car/car.module';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  private readonly headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

  getCarById(id_car: any) {
    console.log(this.url + '/car/' + id_car);
    return this.http.get(this.url + '/car/' + id_car, {
      headers: this.headers,
    }) as Observable<CarModule>;
  }
  // url principal
  url: string = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  saveCare(car: CarModule) {
    console.log(this.url + '/savecar');

    console.log('car service' + car);

    return this.http.post(this.url + '/savecar', car, {
      headers: this.headers,
    }) as Observable<CarModule>;
  }
  getAllcars(): Observable<CarModule[]> {
    return this.http.get<CarModule[]>(this.url + '/cars', {
      headers: this.headers,
    }) as Observable<CarModule[]>;
  }

  updateCar(car: CarModule): Observable<CarModule[]> {
    return this.http.put<CarModule[]>(
      this.url + '/updatecar/' + car.id_car,
      car,
      { headers: this.headers }
    ) as Observable<CarModule[]>;
  }

  deleteCar(id_car: number): Observable<CarModule[]> {
    return this.http.delete<CarModule[]>(this.url + '/deletecar/' + id_car, {
      headers: this.headers,
    }) as Observable<CarModule[]>;
  }
}
