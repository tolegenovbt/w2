import { Component, OnInit } from '@angular/core';
import { CarsListService } from '../cars-list.service';
import { ModelsService } from '../models.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged = false;

  username = '';
  password = '';

  constructor(private modelsService: ModelsService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login() {
    this.modelsService.login(this.username, this.password).subscribe(res => {

      localStorage.setItem('token', res.token);

      this.logged = true;

      this.username = '';
      this.password = '';
    });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }

}
