import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Todo } from 'src/app/types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo?: Todo;

  constructor(private todoService: TodoService) {}

  deleteTodo() {
    if (this.todo) {
      this.todoService.deleteTodo(this.todo.id);
    }
  }

  completeTodo() {
    if (this.todo) {
      this.todoService.updateTodo(this.todo.id, {
        isCompleted: !this.todo.isCompleted,
      });
    }
  }
}
