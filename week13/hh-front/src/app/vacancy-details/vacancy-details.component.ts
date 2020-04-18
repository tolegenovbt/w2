import { Company } from './../models';
import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../services/Vacancy.service';
import { ActivatedRoute } from '@angular/router';
import {Vacancy} from '../models';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {
  vacancy: Vacancy;
  sorted: Vacancy[] = [];

  constructor(private vacancyService: VacancyService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTopTen();
    this.getVacancy();
  }

  getVacancy() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacancyService.getVacancy(id).subscribe(vacancy => this.vacancy = vacancy);
  }

  getTopTen() {
    this.vacancyService.getTopTen()
      .subscribe(sorted => {
        this.sorted = sorted;
      });
  }

  save(id): void {
    this.vacancyService.updateVacancy(id, this.vacancy)
      .subscribe();
  }

  deleteVacancy(id) {
    this.vacancyService.deleteVacancy(id).subscribe(res => {
      // this.categories = this.categories.filter(c => c.id != id);
      // this.getCategoryList();
    });
  }

}
