import { Component, OnInit, ViewChild } from '@angular/core';

import { Signup } from '../signup';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  email: string = "xxx@xxx.xxx";
  model: Signup = new Signup();
  langs: string[] = ["English", "French", "German"];
  @ViewChild('f') form: any;

  ngOnInit() {
  }

  onSubmit(){
    if (this.form.valid) {
      console.log("Form submitted!");
      this.form.reset();
    }
  }

}
