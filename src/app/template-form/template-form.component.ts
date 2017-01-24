import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
  }

}
