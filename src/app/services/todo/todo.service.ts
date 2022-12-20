import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/types/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {}

  addTodo(title: string): void {
    this.todos.push({
      id: this.todos.length,
      title,
      isCompleted: false,
    });
  }

  getTodos(): Observable<Todo[]> {
    const todos = of(this.todos);
    return todos;
  }
}
