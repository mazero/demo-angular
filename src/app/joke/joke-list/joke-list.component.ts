import { Joke } from './../../classes/joke';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  public jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror ?', 'Response of my joke'),
      new Joke('What did the cheese say when it looked in the mirror ?', 'Response of my joke'),
      new Joke('What did the cheese say when it looked in the mirror ?', 'Response of my joke'),
    ]
  }

  ngOnInit(): void {
  }

  public addJoke(joke: Joke): void {
    this.jokes.unshift(joke);
  }

}
