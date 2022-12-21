import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  title = '';

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.todoService.addTodo(this.title);
    this.title = '';
  }
}
