import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params =>  console.log(params)); // Should be empty {}
    this.route.parent.params.subscribe(params => console.log(params)); // Should be like: {artistId: "123456789"}
  }

  ngOnInit() {
  }

}
