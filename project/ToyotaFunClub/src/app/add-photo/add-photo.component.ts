import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Photos } from '../photos';
import { User } from '../User';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  photos: Photos[];
  userid: User;
  jsons = localStorage.getItem('currentUser') || [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }


  add(name: string, description: string, price: Float32Array, imageLink: string): void {
    name = name.trim();
    description = description.trim();
    var path = imageLink;
    var filename = path.replace(/^.*\\/, "");
    console.log(filename);
    imageLink = '../assets/img/' + filename;
    imageLink = imageLink.trim();
    const user_id =  parseInt(JSON.parse(String(this.jsons)).id);
    if (!name) { return; }
    if (!description) { return; }
    if (!price) { return; }
    if (!imageLink) { return; }
    this.categoriesService.addPhoto({ name, description, price, imageLink,  user_id } as Photos)
      .subscribe(photo => {
        this.photos.push(photo);
      });
  }
}
