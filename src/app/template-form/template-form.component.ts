import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  email: string;
  langs: string[] = ["English", "French", "German"];

  ngOnInit() {
    this.email = "xxx@xxx.xxx";
  }

}
