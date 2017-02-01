import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { SearchItem } from './search-item';

@Injectable()
export class SearchService {

  apiRoot:string = 'https://itunes.apple.com/search';
  results:SearchItem[];
  loading:boolean;
  
  constructor(private http:Http, private jsonp:Jsonp) {
    this.results = [];
    this.loading = false;
  }

  search(term:string){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL).toPromise().then(
        res => { //Success
          // console.log(res.json());
          this.results = res.json().results.map(item => {
            return new SearchItem(
              item.trackName, 
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          resolve();
        },
        msg => {
          reject(msg);
        }
      );
    });
    return promise;
  }

  searchObservable(term:string): Observable<SearchItem[]>{
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=15`;
    return this.http.get(apiURL)
      .map(res => {
        return res.json().results.map(item => {
          return new SearchItem(item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId);
        })
    });
  }

  searchJsonp(term:string): Observable<SearchItem[]>{
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10&callback=JSONP_CALLBACK`;

    return this.jsonp.request(apiURL)
      .map(res => {
        return res.json().results.map(item => {
          return new SearchItem(item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId);
        });
      });
  }

}
