import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaintService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://collectionapi.metmuseum.org';

  searchPainting(search) {
    return this.http.get(this.baseUrl +
      '/public/collection/v1/search?q=' + search);
  }


  getPainting(obj) {
    return this.http.get(this.baseUrl +
      '/public/collection/v1/objects/' +
      obj);
  }
}
