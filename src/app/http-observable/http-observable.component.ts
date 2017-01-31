import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchItem } from '../search-item';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css']
})
export class HttpObservableComponent implements OnInit {
  private loading:boolean = false;
  private results:Observable<SearchItem[]>;

  constructor(private itunes:SearchService) { }

  ngOnInit() {
  }

  doSearch(term:string){
    this.loading = true;
    this.results = this.itunes.searchObservable(term);
  }

}
