import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Photos } from '../photos';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() category: Category;

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) {}

  public categories: Category[];
  public photos: Photos[];

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories);
  }

  getProducts(){
    this.categoriesService.getPhotos()
      .subscribe(photos => this.photos = photos);
  }
}
