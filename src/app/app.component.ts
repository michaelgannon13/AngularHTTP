import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private posts = [];
  private comments = [];
  private profile = [];

  // need clarity on what this is for
  private dataObservable: Observable<any[]>;

  // not sure why this goes inside constructor
  constructor(private dataService: DataService){
  
    this.dataService.getPosts().subscribe((res: any[])=>{
      this.posts = res;
    });

    this.dataService.getComments().subscribe((res: any[])=>{
      this.comments = res;
    });

    this.dataService.getProfile().subscribe((res: any[])=>{
      this.profile = res;
    });

  }
}
