import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  title = '';


  constructor(
    private todoService: TodoService,
    private router: Router) { }


  async createTodo() {
    try {
      const newTodo = await this.todoService.createTodo(this.title);
      this.router.navigate(['/todos']);
    } catch (err) {
      console.error('Could not create new Todo!',err);
    }
  }
}
