import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  constructor(private TodoService: TodosService) { }
  private todos = [];

  ngOnInit() {
  }

  public getToDos(){
    this.TodoService.getToDos()
      .subscribe((res: any[]) => {
        this.todos = res;
        console.log(this.todos);
      });
  }


}
