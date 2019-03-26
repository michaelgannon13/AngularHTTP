import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostmanService {
  
  constructor(private http: HttpClient) { }
  
  baseUrl = 'https://jsonplaceholder.typicode.com';

  postSomething(data) {
    this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: data,
      userId: 1
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      });
  }
}
