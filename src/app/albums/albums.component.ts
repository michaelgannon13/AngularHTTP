import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  private albums = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
  }

  public getAlbums () {
    this.albumsService.getAlbums()
      .subscribe((res: any[]) => {
        this.albums = res;
      });
  }
}
