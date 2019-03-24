import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  private posts = [];
  private comments = [];
  private profiles = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  public getPosts() {
    this.dataService.getPosts()
      .subscribe((res: any[]) => {
        this.posts = res;
      });
  }

  public getComments() {
    this.dataService.getComments()
      .subscribe((res: any[]) => {
        this.comments = res;
      });
  }

  // this doesn't work since the observable is nested differently to the above observables
  public getProfile() {
    this.dataService.getProfile()
      .subscribe((res: any[]) => {
        this.profiles = res;
      });
  }

}
