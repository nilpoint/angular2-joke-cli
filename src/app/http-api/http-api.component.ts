import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

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

}
