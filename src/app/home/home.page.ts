import { Component } from '@angular/core';
import { Book } from './home-model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: Book[] = [
    {
      name: 'Harry Potter',
      year: '2010'
    },
    {
      name: 'The Hunger Games',
      year: '2012'
    }
  ];

  bookForm = this.formBuilder.group({
    name: '',
    year: ''
  });

  idxSelectedMovie = null;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  addButtonClick(){
    this.books.push(
      {
        name: this.bookForm.value.name,
        year: this.bookForm.value.year,
      }
    );
  }

  movieCardClick(idx: number) {
    this.idxSelectedMovie = idx;
  }
}
