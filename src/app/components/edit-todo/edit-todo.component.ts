import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todo: any = {};
  id!: number;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.getTodo();
  }


  async getTodo() {
    this.id = this.route.snapshot.params['id'];
    try {
      this.todo = await this.todoService.getTodoById(this.id);
      console.log(this.todo);
    } catch (error) {
      console.error('Error loading the todo:', error);
    }
  }


  async updateTodo() {
    try {
      await this.todoService.updateTodo(this.id, this.todo);
      console.log('Todo updated');
      this.router.navigate(['/todos']);
    } catch (err) {
      console.error('Error updating the todo:', err);
    }
  }

}
