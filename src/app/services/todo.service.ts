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
    return this.http.patch<Todo>(`https://apifortodo.herokuapp.com/projects/${fields.project_id}/todo/${fields.id}`, fields)
  }

  toggleComplete(todo: Todo): void {
    this.updateTodoById(todo.id, todo).subscribe(updatedTodo=> console.log(updatedTodo))
  }
}
