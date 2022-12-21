import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from 'src/app/types/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: BehaviorSubject<Todo[]> = new BehaviorSubject([] as Todo[]);

  constructor() {}

  addTodo(title: string): void {
    this.todos.next([
      ...this.todos.value,
      { title, isCompleted: false, id: this.todos.value.length },
    ]);
  }

  getTodos(): Observable<Todo[]> {
    return this.todos.asObservable();
  }

  deleteTodo(id: number): void {
    const newTodos = this.todos.value.filter((todo) => todo.id !== id);
    this.todos.next(newTodos);
  }
}
