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

  constructor() {}

  public helloWorld(): string {
    return 'Hello World !'
  }

  public displayBlue(): boolean { return this.color === 'blue' ? true : false; } 

}