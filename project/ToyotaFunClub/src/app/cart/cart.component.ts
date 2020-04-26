import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Photos } from '../photos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  photosFromCart: Photos[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getPhotosFromCart();
    //this.photosFromCart = JSON.parse(localStorage.getItem('photos'));
  }

  getPhotosFromCart(): void {
    this.cartService.getPhotosFromCart().subscribe( photos => this.photosFromCart = photos);
  }

  deletePhotosFromCart(photos: Photos) {
    this.cartService.deletePhotosFromCart(photos);
  }
}
