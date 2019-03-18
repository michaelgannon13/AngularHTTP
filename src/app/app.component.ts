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
  private profiles = [];

  // need clarity on what this is for
  private dataObservable: Observable<any[]>;

  // not sure why this goes inside constructor
  constructor(private dataService: DataService){}

  public getPosts(){
    this.dataService.getPosts().subscribe((res: any[])=>{
      this.posts = res;
    });
  }

  public getComments(){
    this.dataService.getComments().subscribe((res: any[])=>{
      this.comments = res;
    });
  }

  // this doesn't work since the observable is nested differently to the above observables
  public getProfile(){
    this.dataService.getProfile().subscribe((res: any[])=>{
      this.profiles = res;
    });
  }
}
