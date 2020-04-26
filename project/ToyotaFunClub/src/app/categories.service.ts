import { Injectable } from '@angular/core';
import { Category, LoginResponse } from './category';
import {Observable, of} from 'rxjs';
import { Photos } from './photos';
import { Comment } from './Comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  BASE_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.BASE_URL}/api/photos/`)
    .pipe(
      catchError(this.handleError<Photos[]>('getPhotos', []))
    );
  }

  getPhotosOfUser(id: number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.BASE_URL}/api/get/${id}/photos/`)
    .pipe(
      catchError(this.handleError<Photos[]>('getPhotos', []))
    );
  }

  getPhoto(id: number): Observable<Photos> {
    return this.http.get<Photos>(`${this.BASE_URL}/api/photos/${id}/`).pipe(
      catchError(this.handleError<Photos>(`getPhoto id=${id}`))
    );
  }

  getComment(id: number): Observable<Comment> {
    console.log(id, "I am here")
    return this.http.get<Comment>(`${this.BASE_URL}/api/photos/${id}/comments/`).pipe(
      catchError(this.handleError<Comment>(`getComment id=${id}`))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8000/api/categories/');
  }

  getPhotoofC(id: number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.BASE_URL}/api/categories/${id}/photos/`);
  }

  updatePhoto(photo: Photos): Observable<any> {
    console.log("Photos category id", photo)
    return this.http.put(`${this.BASE_URL}/api/photos/${photo.id}/`, photo, this.httpOptions).pipe(
      catchError(this.handleError<any>('updatephoto'))
    );
  }

  addPhoto(photo: Photos): Observable<Photos> {
    return this.http.post<Photos>(`${this.BASE_URL}/api/photos/`, photo).pipe(
      catchError(this.handleError<Photos>('addPhoto'))
    );
  }

  deletePhoto(photo: Photos | number): Observable<Photos> {
    const id = typeof photo === 'number' ? photo : photo.id;

    return this.http.delete<Photos>(`${this.BASE_URL}/api/photos/${id}/`, this.httpOptions).pipe(
      catchError(this.handleError<Photos>('deleteProduct'))
    );
  }

  searchPhotos(term: string): Observable<Photos[]> {
    if (!term.trim()) {
      // if not search term, return empty photo array.
      return of([]);
    }
    return this.http.get<Photos[]>(`${this.BASE_URL}/api/photos/?name=${term}`).pipe(
      catchError(this.handleError<Photos[]>('searchphotos', []))
    );
  }

  addComment(comment: Comment) {
    console.log("I am here")
    console.log(comment)
    return this.http.post<Comment>(`${this.BASE_URL}/api/photos/${comment.photo_id}/comments/`, comment).pipe(
      catchError(this.handleError<Comment>('addComment'))
    );
  }


  login(email, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/obtain_token/`, {
      email,
      password
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
    };
  }
}
