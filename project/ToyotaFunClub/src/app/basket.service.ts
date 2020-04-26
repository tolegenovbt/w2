import { Injectable } from '@angular/core';
import { Car } from './models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  addCarToBasket(car: Car) {
    return this.http.post<Car>("http://127.0.0.1:8000/api/basket/cars/", car);
  }

  getCarsFromBasket(): Observable<Car[]> {
    return this.http.get<Car[]>("http://127.0.0.1:8000/api/basket/cars/");
  }

  deleteCarFromBasket(car: Car) {
    return this.http.delete<Car>(`http://127.0.0.1:8000/api/basket/cars/${car.id}/`)
  }
}
