import { Component, OnInit } from '@angular/core';
import { Photos } from '../photos';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';
import { Comment } from '../Comment';


@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.css']
})
export class PhotosDetailComponent implements OnInit {

  selectedphotosId: string;
  photos: Photos;
  photosd: Photos[];
  isToggled = true;
  jsons = localStorage.getItem('currentUser') || [];

  constructor(private route: ActivatedRoute,
              private categoriesService: CategoriesService,
              private location: Location,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getPhoto();
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

  getPhoto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getPhoto(id)
      .subscribe(photos => this.photos = photos);
  }


  save(): void {
    // tslint:disable-next-line: radix
    this.photos.user_id = parseInt(JSON.parse(String(this.jsons)).id);
    // this.photos.category_id = 2;
    console.log(this.photos.category_id);

    this.categoriesService.updatePhoto(this.photos)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  onAddToCart(photos: Photos): void {
    this.cartService.addPhotosToCart(photos);
  }ф

}
