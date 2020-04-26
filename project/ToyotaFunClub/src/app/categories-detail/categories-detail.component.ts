import { Component, OnInit } from '@angular/core';
import { Photos } from '../photos';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../category';
import { CategoriesService } from '../categories.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})
export class CategoriesDetailComponent implements OnInit {

  category: Category;
  selectedphotos: Photos;
  photos: Photos[];

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getListOfPhotos();
  }

  getListOfPhotos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getPhotoofC(id)
      .subscribe(photos => this.photos = photos);
  }

  goBack(): void {
    this.location.back();
  }

  onAddToCart(photos: Photos): void {
    this.cartService.addPhotosToCart(photos);
  }

  onSelect(photos: Photos): void {
    this.selectedphotos = photos;
  }

}
