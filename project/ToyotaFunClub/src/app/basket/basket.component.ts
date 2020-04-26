import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Car } from '../models';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  carsFromBasket: Car[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.getCarsFromBasket()
  }

  getCarsFromBasket(): void {
    this.basketService.getCarsFromBasket().subscribe( cars => this.carsFromBasket = cars)
  }

  deleteCarsFromBasket(car: Car) {
    this.basketService.deleteCarFromBasket(car)
  }
  buyCarsFromBasket(car: Car)
  {
    this.basketService.deleteCarFromBasket(car)
    window.alert('Congratulations!!! You are now Toyota car owner!')
  }
}
