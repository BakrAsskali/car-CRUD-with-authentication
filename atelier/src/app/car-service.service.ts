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
    if (localStorage.getItem('jwt') == null) {
      return this.http.get(
        this.url + '/car/' + id_car
      ) as Observable<CarModule>;
    } else {
      return this.http.get(this.url + '/car/' + id_car, {
        headers: this.headers,
      }) as Observable<CarModule>;
    }
  }
  // url principal
  url: string = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  saveCare(car: CarModule) {
    if (localStorage.getItem('jwt') == null) {
      return this.http.post(
        this.url + '/savecar',
        car
      ) as Observable<CarModule>;
    } else {
      return this.http.post(this.url + '/savecar', car, {
        headers: this.headers,
      }) as Observable<CarModule>;
    }
  }
  getAllcars(): Observable<CarModule[]> {
    if (localStorage.getItem('jwt') == null) {
      return this.http.get(this.url + '/cars') as Observable<CarModule[]>;
    } else {
      return this.http.get(this.url + '/cars', {
        headers: this.headers,
      }) as Observable<CarModule[]>;
    }
  }

  updateCar(car: CarModule): Observable<CarModule[]> {
    if (localStorage.getItem('jwt') == null) {
      return this.http.put(this.url + '/updatecar', car) as Observable<
        CarModule[]
      >;
    } else {
      return this.http.put(this.url + '/updatecar', car, {
        headers: this.headers,
      }) as Observable<CarModule[]>;
    }
  }

  deleteCar(id_car: number): Observable<CarModule[]> {
    if (localStorage.getItem('jwt') == null) {
      return this.http.delete(this.url + '/deletecar/' + id_car) as Observable<
        CarModule[]
      >;
    } else {
      return this.http.delete(this.url + '/deletecar/' + id_car, {
        headers: this.headers,
      }) as Observable<CarModule[]>;
    }
  }
}
