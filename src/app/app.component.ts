import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private httpClient: HttpClient){};
  
  title = 'AngularHttpClient';
  baseUrl = 'http://localhost:3000';
  data = []

  //http://localhost:3000/
  getAnything(){
    this.httpClient
      .get(this.baseUrl + '/posts')
      .subscribe((res : any[])=>{
        this.data = res;
        console.log('data array is', this.data);
      })
  }
}
