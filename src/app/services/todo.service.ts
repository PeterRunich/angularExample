import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../card/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient) { }

  updateTodoById(id: number, fields: Todo) {
    console.log('Todo update', id, fields)
    return this.http.patch<Todo>(`https://apifortodo.herokuapp.com/projects/${fields.project_id}/todo/${fields.id}`, fields)
  }

  createTodo(fields: object) {
    console.log('Todo create', fields)
    return this.http.post<Todo>('https://apifortodo.herokuapp.com/todos', fields)
  }

  toggleComplete(todo: Todo): void {
    console.log('Todo toggle started', todo)
    this.updateTodoById(todo.id, todo).subscribe(updatedTodo=> console.log(updatedTodo))
  }
}
