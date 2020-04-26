import { Injectable } from '@angular/core';
import { Car } from './models';
// import { carsList } from './cars-list';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CarsListService {

  private carsUrl = 'http://127.0.0.1:8000/api/cars/';
  private modelsUrl = 'http://127.0.0.1:8000/api/models/';
  cars: Car[];

  constructor(
    private http: HttpClient) { }

  getCarsList(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }

  getCarsByModel(id: number): Observable<Car[]> {
    return this.http.get<Car[]>(`http://127.0.0.1:8000/api/categories/${id}/cars/`);
  }

  getModelName(id: number): Observable<any> {
    const url = `${this.carsUrl}/${id}/`;
    return this.http.get(url);
  }

}
