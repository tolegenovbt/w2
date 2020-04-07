import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { BasketComponent } from './basket/basket.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'models', component: ModelsComponent},
  { path: 'cars', component: CarsListComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'cars/:carsId', component: CarsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
