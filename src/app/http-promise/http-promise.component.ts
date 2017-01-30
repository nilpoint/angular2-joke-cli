import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-http-promise',
  templateUrl: './http-promise.component.html',
  styleUrls: ['./http-promise.component.css']
})
export class HttpPromiseComponent implements OnInit {

  private loading:boolean = false;

  constructor(private itunes:SearchService) { }

  ngOnInit() {
  }

  doSearch(term: string){
    console.log("Http Promise Search");
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false);
  }

}
