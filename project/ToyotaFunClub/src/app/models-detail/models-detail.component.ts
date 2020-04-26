import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model, Car } from '../models';
import { ModelsService } from '../models.service';
import { BasketService } from '../basket.service';
import { CarsListService } from '../cars-list.service';

@Component({
  selector: 'app-models-detail',
  templateUrl: './models-detail.component.html',
  styleUrls: ['./models-detail.component.css']
})
export class ModelsDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private modelsService: ModelsService,
    private basketService: BasketService,
    private carsListService: CarsListService
    ) { }


    models: Model[]

  ngOnInit(): void {
    this.getModels()
  }

  getModels(): void {
    this.modelsService.getModels().subscribe( models => this.models = models)
  }
  // models: Model[]
  // cars: Car[]


  //  ngOnInit(): void {
  //   this.getCarsList();
  //   this.getModels();
  // }
  // getModels(): void {
  //   this.modelsService.getModels().subscribe( models => this.models = models);
  // }
  // getCarsList() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.carsListService.getCarsByModel(id).subscribe(cars => this.cars = cars);
  // }

  // AddToCart(car: Car): void {
  //   this.basketService.addCarToBasket(car).subscribe();
  // }

}
