import { Company } from './../models';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[] = [];
  company: Company;
  public name = '';

  constructor(public companyService: CompanyService) { }

  ngOnInit() {
      this.getCompanyList();
  }

  getCompanyList() {
    this.companyService.getCompanyList()
      .subscribe(companies => {
        this.companies = companies;
      });
  }

  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe(res => {
      // this.categories = this.categories.filter(c => c.id != id);
      // this.getCategoryList();
    });
  }

  add(name: string, description: string, city: string, address: string): void {
    name = name.trim();
    description = description.trim();
    city = city.trim();
    address = address.trim();
    if (!name) { return; }
    if (!description) { return; }
    if (!city) { return; }
    if (!address) { return; }
    this.companyService.addCompany({ name, description, city, address } as Company)
      .subscribe(company => {
        this.companies.push(company);
      });
  }

}
