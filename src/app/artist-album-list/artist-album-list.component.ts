import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params)); // Should be empty {}
    this.route.parent.params.subscribe(params => console.log(params)); // Should be like: {artistId: "123456789"}
  }

  ngOnInit() {
  }

}
