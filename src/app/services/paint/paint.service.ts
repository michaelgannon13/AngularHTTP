import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaintService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://collectionapi.metmuseum.org';

  searchPainting() {
    return this.http.get(this.baseUrl +
      '/public/collection/v1/search?q=rain');
  }


  getPainting(obj) {
    return this.http.get(this.baseUrl +
      '/public/collection/v1/objects/' +
      obj);
  }
}
