import { Book } from './classes/book';
import { Component } from '@angular/core';
import { User } from './classes/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Angular Nomades';
  public user: User = new User(100, 'Camille', 'Pasche');
  public users: User[] = [
    new User(100, 'Camille', 'Pasche'),
    new User(200, 'Stéhpanie', 'Burdet'),
    new User(300, 'John', 'Calzetta')
  ];
  public tab: number[] = [1, 2, 3, 4, 5, 10, 11, 12, 14, 20 ,40 ,60, 90];
  public name: string = 'Robin';
  public color: string = 'red';

  public bookName = 'ES6 Programming';
  public bookPictureUrl = 'https://picsum.photos/200';
  public isAvailable: boolean = false;
  public books: Book[] = [
    new Book('Book 1'),
    new Book('Book 2'),
    new Book('Book 3'),
    new Book('Book 4'),
  ]
  constructor() {
    this.isAvailable = true;
  }

  public helloWorld(): string {
    return 'Hello World !'
  }

  public displayBlue(): boolean { return this.color === 'blue' ? true : false; } 

}