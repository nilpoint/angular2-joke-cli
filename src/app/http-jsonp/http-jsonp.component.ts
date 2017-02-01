import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { SearchItem } from '../search-item';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-http-jsonp',
  templateUrl: './http-jsonp.component.html',
  styleUrls: ['./http-jsonp.component.css']
})
export class HttpJsonpComponent implements OnInit {
  private loading:boolean = false;
  private results:Observable<SearchItem[]>;
  private searchField:FormControl;

  constructor(private itunes:SearchService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(() => this.loading = true)
      .switchMap((term) => this.results = this.itunes.searchJsonp(term))
      .do(() => this.loading = false)
      .subscribe();
  }

  doSearch(term:string){
    this.loading = true;
    this.results = this.itunes.searchJsonp(term);
  }

}
