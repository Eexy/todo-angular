import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  title = 'todo';

  onSubmit() {
    console.info({ title: this.title });
  }
}
