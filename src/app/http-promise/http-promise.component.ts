import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-promise',
  templateUrl: './http-promise.component.html',
  styleUrls: ['./http-promise.component.css']
})
export class HttpPromiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doSearch(term: string){
    console.log("Http Promise Search");
  }

}
