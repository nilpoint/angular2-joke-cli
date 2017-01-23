import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  myform: FormGroup;
  langs: string[] = ["English", "French", "German"];

  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required)
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^@]+@[^@]+")
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl()
    });
  }

}
