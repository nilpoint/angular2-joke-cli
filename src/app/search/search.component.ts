import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private loading: boolean = false;

  constructor(private itunes: SearchService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.doSearch(params['term']);
    });
  }

  ngOnInit() {
  }

  onSearch(term: string){
    this.router.navigate(['search', term]);
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.searchPromiseJsonp(term).then(_ => this.loading = false)
  }

}
