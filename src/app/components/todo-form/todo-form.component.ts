import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  title = 'todo';

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.todoService.addTodo(this.title);
    this.title = '';
  }
}
