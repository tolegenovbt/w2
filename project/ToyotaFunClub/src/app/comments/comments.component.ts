import { User } from './../User';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Comment } from '../Comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentsd: Comment;
  comments: Comment[];
  jsons = localStorage.getItem('currentUser') || [];
  useremail:  User;

  constructor( private route: ActivatedRoute, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCommment();
    this.useremail = JSON.parse(String(this.jsons)).email;
  }

  getCommment(): void {
    console.log("i am in components")
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getComment(id)
      .subscribe(commentsd => this.commentsd = commentsd);
  }

  addcomment(text: string): void {
    text = text.trim();
    const photo_id = +this.route.snapshot.paramMap.get('id');
    const username = String(this.useremail)
    console.log(username, photo_id, text)
    if (!text) { return; }
    this.categoriesService.addComment({ username, text, photo_id } as Comment)
      .subscribe(comment => {
        this.comments.push(comment);
      });
  }

}
