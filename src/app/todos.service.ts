import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com'

  getToDos () {
    return this.httpClient.get(this.baseUrl + '/todos/');
  }
}
