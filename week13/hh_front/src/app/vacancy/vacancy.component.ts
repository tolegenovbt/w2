import { Vacancy } from './../models';
import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  vacancies: Vacancy[] = [];

  constructor(public vacancyService: VacancyService) { }

  ngOnInit() {
      this.getVacancyList();
  }

  getVacancyList() {
    this.vacancyService.getVacancyList()
      .subscribe(vacancies => {
        this.vacancies = vacancies;
      });
  }

  add(name: string, description: string, salary: string, company_id: string): void {
    name = name.trim();
    description = description.trim();
    salary = salary.trim();
    company_id = company_id.trim();
    if (!name) { return; }
    if (!description) { return; }
    if (!salary) { return; }
    if (!company_id) { return; }
    this.vacancyService.addVacancy({ name, description, salary, company_id } as Vacancy)
      .subscribe(vacancy => {
        this.vacancies.push(vacancy);
      });
  }

}
