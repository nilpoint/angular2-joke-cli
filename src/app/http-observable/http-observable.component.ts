import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

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
  private searchField:FormControl;

  constructor(private itunes:SearchService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap((term) => this.results = this.itunes.searchObservable(term))
      .subscribe();
  }

  doSearch(term:string){
    this.loading = true;
    this.results = this.itunes.searchObservable(term);
  }

}
