import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyComponent } from './company/company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent },
  { path: 'vacancies', component: VacancyComponent },
  { path: 'vacancies/:id', component: VacancyDetailsComponent },
  { path: 'vacancies/sorted', component: VacancyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
