import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { AuthentificationService } from '../authentification.service';
import { User } from '../User';
import { Photos } from '../photos';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.css']
})

export class UserPhotosComponent implements OnInit {
  currentUser: User;
  jsons = localStorage.getItem('currentUser') || [];

  constructor(private categoriesService: CategoriesService, private cartService: CartService, private route: ActivatedRoute) {
    }

    photos: Photos[];

    selectedphotos: Photos;
    text: string = "Name";

    ngOnInit(): void {
      this.getPhotosOfUser();
    }

    getPhotosOfUser(): void {
      console.log("I am in userPhotos")
      const uid = parseInt(JSON.parse(String(this.jsons)).id);
      console.log(typeof(uid), uid)
      this.categoriesService.getPhotosOfUser(uid).subscribe(photos => this.photos = photos);
    }


    delete(photo: Photos): void {
      this.photos = this.photos.filter(h => h !== photo);
      this.categoriesService.deletePhoto(photo).subscribe();
    }

    onAddToCart(photos: Photos): void {
      this.cartService.addPhotosToCart(photos);
    }

    onSelect(photos: Photos): void {
      this.selectedphotos = photos;
    }


}
