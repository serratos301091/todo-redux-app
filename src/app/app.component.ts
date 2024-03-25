import { Component } from '@angular/core';
import { Todo } from './todos/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';

  constructor() {
    console.log("ACA APP COMPONENT HTML")
    // const todo:Todo = {id:0, completado:true,texto:''}
    // console.log(todo)
  }
}
