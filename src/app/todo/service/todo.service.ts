import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }
  AddTodo(todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos', todo);
  }
  MergeCompletedTodo(todo): Observable<Todo> {
    return this.http.patch<Todo>(
      'http://localhost:3000/todos/' + todo.id,
      todo
    );
  }
  DeleteTodo(todoid): Observable<any> {
    return this.http.delete<Todo>(
      'http://localhost:3000/todos/' + todoid,
      todoid
    );
  }
}
