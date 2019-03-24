import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com';

  getAlbums() {
    return this.httpClient.get(this.baseUrl + '/albums');
  }

  setAlbums() {
    this.httpClient.post(this.baseUrl,
        {
            test: 'test'
        })
        .subscribe(
            (val) => {
                console.log('Here is what was returned from the API endpoint', val);
            },
            response => {
                console.log('Here is the response returned', response);
            },
            () => {
                console.log('The POST observable is now completed.');
              });
    }
}
