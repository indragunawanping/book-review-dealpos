import { Component } from '@angular/core';
import { Book } from './home-model';
import { FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: Book[] = [
    {
      name: 'Harry Potter',
      year: '2010',
      reviews: []
    },
    {
      name: 'The Hunger Games',
      year: '2012',
      reviews: []
    }
  ];


  bookForm = this.formBuilder.group({
    name: '',
    year: ''
  });

  reviewForm = this.formBuilder.group({
    email: '',
    note: '',
    star: []
  });

  idxSelectedMovie = -1;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
  }

  addBookButtonClick() {
    this.books.push(
      {
        name: this.bookForm.value.name,
        year: this.bookForm.value.year,
        reviews: []
      }
    );
    const message = `${this.bookForm.value.name} added.`;
    this.presentToastWithOptions(message);
    console.log(JSON.stringify(this.books));
    this.bookForm.reset();
  }

  saveReviewButtonClick() {
    console.log('this.reviewForm.value.star: ', this.reviewForm.value.star);
    if (this.reviewForm.value.star >= 0 && this.reviewForm.value.star <= 5) {
      const starArr = [];
      for (let i = 0; i < 5; i++) {
        if(i < this.reviewForm.value.star) {
          starArr.push(1);
        } else {
          starArr.push(0);
        }
      }

      console.log('starArr: ', starArr);

      if (this.idxSelectedMovie > -1) {
        this.books[this.idxSelectedMovie].reviews.push(
          {
            email: this.reviewForm.value.email ? this.reviewForm.value.email : '[unknown]',
            note: this.reviewForm.value.note ? this.reviewForm.value.note : '[unknown]',
            star: this.reviewForm.value.star ? this.reviewForm.value.star : '[unknown]',
            stars: starArr
          }
        );
      }
      console.log(JSON.stringify(this.books));
      this.reviewForm.reset();
    } else {
      alert('The rate range should be between 0 and 5');
    }
  }

  movieCardClick(idx: number) {
    this.idxSelectedMovie = idx;
  }

  async presentToastWithOptions(message: string) {
    const toast = await this.toastController.create({
      header: message,
      position: 'bottom',
      duration: 2000,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        }
      ]
    });
    await toast.present();
  }
}
