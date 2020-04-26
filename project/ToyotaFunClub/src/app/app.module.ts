import { UserPhotosComponent } from './user-photos/user-photos.component';
import { CommentsComponent } from './comments/comments.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PhotoSearchComponent } from './photo-search/photo-search.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { AuthInterceptor } from './auth.intercept';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
      AppComponent,
      UserPhotosComponent,
      CategoriesComponent,
      HomeComponent,
      CartComponent,
      NavigationComponent,
      PhotosDetailComponent,
      PhotosListComponent,
      CategoriesDetailComponent,
      FooterComponent,
      LoginComponent,
      SignupComponent,
      PhotoSearchComponent,
      AddPhotoComponent,
      CommentsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      //TheHttpClientInMemoryWebApiModulemoduleinterceptsHTTPrequests\\n//andreturnssimulatedserverresponses.\\n//Removeitwhenarealserverisreadytoreceiverequests.\\n\n
   ],
   providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
