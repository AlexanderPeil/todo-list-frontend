import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }


  loadTodos() {
    const url = environment.baseUrl + '/todos/';
    return lastValueFrom(this.http.get(url));
  }
  

  createTodo(title:string) {
    const url = environment.baseUrl + '/todos/';
    const body = {title};
    return lastValueFrom(this.http.post(url, body));
  }


  getTodoById(id: number) {
    const url = `${environment.baseUrl}/todos/${id}/`;
    return lastValueFrom(this.http.get(url));
  }


  updateTodo(id: number, todo: any): Promise<any> {
    const url = `${environment.baseUrl}/todos/${id}/`;
    return lastValueFrom(this.http.patch(url, todo));
  }
}
