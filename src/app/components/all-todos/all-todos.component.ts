import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit {
  todos: any = [];
  error = '';

  constructor(private todoService: TodoService) { }


  ngOnInit() {
    this.initTodos();
  }
  

  async initTodos() {
    try {
      this.todos = await this.todoService.loadTodos();
      console.log(this.todos)
    } catch (err) {
      this.error = 'Failure while loading!';
    }
  }


  async deleteTodo(id: number) {
    try {
      await this.todoService.deleteTodo(id);
      console.log('Todo deleted successfully!');
      this.todos = this.todos.filter((todo: { id: number; }) => todo.id !== id);
    } catch (err) {
      console.error('Error deleting the todo:', err);
    }
  }

}
