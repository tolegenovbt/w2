import { Component, OnInit } from '@angular/core';
import { Car } from '../models';
import { CarsListService } from '../cars-list.service';
import { BasketService } from '../basket.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private carsListService: CarsListService, 
    private basketService: BasketService
    ) { }
  
  carsList: Car[]

  ngOnInit(): void {
    this.getCarsList()
  }

  selectedCar: Car

  getCarsList(): void {
    this.carsListService.getCarsList().subscribe( car => this.carsList = car)
  }

  onAddToBasket(car: Car): void {
    this.basketService.addCarToBasket(car)
    window.alert('Added to the basket!')
  }

  onSelect(car: Car): void{
    this.selectedCar = car;
  }

}
