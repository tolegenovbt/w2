import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth.intercept';

@NgModule({
   declarations: [
      AppComponent,
      CompanyComponent,
      CompanyDetailsComponent,
      VacancyComponent,
      VacancyDetailsComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
