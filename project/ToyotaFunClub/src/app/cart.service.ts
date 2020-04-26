import { Injectable } from '@angular/core';
import { Photos } from './photos';
import {Observable, of} from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Photos[] = [];
  constructor() { }

  addPhotosToCart(photos: Photos) {
    this.cart.push(photos);
  }

  getPhotosFromCart(): Observable<Photos[]> {
    return of(this.cart);
  }

  deletePhotosFromCart(photos: Photos){
    for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === photos.id) {
            this.cart.splice(i, 1);
        }
    }

    this.cart.find(photos => photos.id === photos.id);
  }
}
