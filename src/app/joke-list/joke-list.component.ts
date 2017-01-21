import { Component, OnInit } from '@angular/core';

import { Joke } from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought 'That's not very mature'")
    ];
   }

  ngOnInit() {
  }

  addJoke(joke: Joke) {
    if (joke) {
      this.jokes.unshift(joke);
    }
  }

  deleteJoke(joke: Joke) {
    const index = this.jokes.indexOf(joke);
    if (index != -1) {
      this.jokes.splice(index, 1);
    }
  }

}
