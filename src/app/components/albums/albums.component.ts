import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  private albums = [];
  test = 'test';

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
  }

  public getAlbums() {
    this.albumsService.getAlbums()
      .subscribe((res: any[]) => {
        this.albums = res;
      });
  }

  public setAlbums() {
    return this.albumsService.setAlbums().subscribe((res: any[]) => {
      this.albums = res;
      console.log(this.albums);
    } );
  }
}
