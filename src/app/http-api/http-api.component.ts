import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent implements OnInit {

  apiRoot: string = "http://httpbin.org";

  constructor(private http:Http) { }

  ngOnInit() {
  }

  doGET(){
    console.log("doGET");
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(res => console.log(res.text()));
    this.http.get(url).subscribe(res => console.log(res.json()));

    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));
  }

  doDELETE(){
    console.log("doDELETE");
    let url = `${this.apiRoot}/delete`;
    let search = new URLSearchParams();
    search.set('foo', 'bar');
    search.set('limit', '25');
    this.http.delete(url, {search}).subscribe(res => console.log(res.json()));
  }

  doPOST(){
    console.log("doPOST");

    let url = `${this.apiRoot}/post`;

    let search = new URLSearchParams();
    search.set('foo', 'bar');
    search.set('hello', 'world');

    this.http.post(url, {key1: 'value1', key2: 'value2'}, {search}).subscribe(res => console.log(res.json()));
  }

  doPUT(){
    console.log("doPUT");

    let url = `${this.apiRoot}/put`;

    let search = new URLSearchParams();
    search.set('foo', 'bar');
    search.set('hello', 'world');

    this.http.put(url, {key1: 'http', key2: 'put'}, {search}).subscribe(res => console.log(res.json()));
  }

  doGETAsPromise(){
    console.log("doGETAsPromise");

    let url = `${this.apiRoot}/get`;

    this.http.get(url).toPromise().then(res => console.log(res.json()))
  }

}
