import { Component, OnInit } from '@angular/core';

import { SearchItem } from '../search-item';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css']
})
export class HttpObservableComponent implements OnInit {
  private loading:boolean = false;
  private results:SearchItem[];

  constructor(private itunes:SearchService) { }

  ngOnInit() {
  }

  doSearch(term:string){
    this.loading = true;
    this.itunes.searchObservable(term).subscribe(data => {
      this.loading = false;
      this.results = data;
    });
  }

}
