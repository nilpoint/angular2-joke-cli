import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Joke } from '../joke'

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
    styles:[
    `
    .card {
      background-color: gray;
    }
    `
  ]
})
export class JokeFormComponent implements OnInit {

  @Output()
  jokeCreated = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

  createJoke(setup: string, punchline: string) {
    // trigger jokeCreated event
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
