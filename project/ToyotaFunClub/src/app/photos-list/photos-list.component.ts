import { Component, OnInit } from '@angular/core';
import { Photos } from '../photos';
import { CategoriesService } from '../categories.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  currentUser: User;

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private cartService: CartService) {
              }

  photos: Photos[];

  selectedphotos: Photos;
  text: string = "Name";

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.categoriesService.getPhotos().subscribe(photos => this.photos = photos);
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
