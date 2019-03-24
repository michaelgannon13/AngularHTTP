import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com';

  getAlbums () {
    return this.httpClient.get(this.baseUrl + '/albums');
  }
}
