import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AlbumsService } from './albums.service';
import { TodosService } from './todos.service';
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
  private todos = [];
  private albums = [];

  // need clarity on what this is for
  private dataObservable: Observable<any[]>;

  // not sure why this goes inside constructor
  constructor(
    private dataService: DataService,
    private albumsService: AlbumsService,
    private TodoService: TodosService
  ){}

  public getAlbums () {
    this.albumsService.getAlbums()
      .subscribe((res: any[])=>{
        this.albums = res;
        console.log('albums are ', this.albums);
      })
  }

  public getToDos(){
    this.TodoService.getToDos()
      .subscribe((res: any[])=>{
        this.todos = res;
        console.log(this.todos);
      })
  }

  public getPosts(){
    this.dataService.getPosts()
      .subscribe((res: any[])=>{
        this.posts = res;
    });
  }

  public getComments(){
    this.dataService.getComments()
      .subscribe((res: any[])=>{
        this.comments = res;
    });
  }

  // this doesn't work since the observable is nested differently to the above observables
  public getProfile(){
    this.dataService.getProfile()
      .subscribe((res: any[])=>{
        this.profiles = res;
    });
  }
}
