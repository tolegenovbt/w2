import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Photos } from '../photos';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-photo-search',
  templateUrl: './photo-search.component.html',
  styleUrls: [ './photo-search.component.css' ]
})
export class PhotoSearchComponent implements OnInit {
  photos$: Observable<Photos[]>;
  private searchTerms = new Subject<string>();

  constructor(private categoriesService: CategoriesService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.photos$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.categoriesService.searchPhotos(term)),
    );
  }
}
