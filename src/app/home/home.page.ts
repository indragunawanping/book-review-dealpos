import { Component } from '@angular/core';
import { Book } from './home-model';

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

  constructor() {}

}
