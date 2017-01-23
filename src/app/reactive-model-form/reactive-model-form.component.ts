import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-model-form',
  templateUrl: './reactive-model-form.component.html',
  styleUrls: ['./reactive-model-form.component.css']
})
export class ReactiveModelFormComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = ["a", "b", "c"];

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
  }

}
