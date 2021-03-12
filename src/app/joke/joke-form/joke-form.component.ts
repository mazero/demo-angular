import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Joke } from 'src/app/classes/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated: EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit(): void {
  }

  public createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

}
