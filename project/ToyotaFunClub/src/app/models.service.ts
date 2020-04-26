import { Injectable } from '@angular/core';
import { Model } from './model';
import { MODELS} from './models-list';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { LoginResponse } from './models'

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(
    private http: HttpClient) { }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>('http://127.0.0.1:8000/api/models/');
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8000/api/login/', {
      username,
      password
    });
  }
}
