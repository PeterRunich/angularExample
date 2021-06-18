import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Todo } from '../models/todo.model'
import { Injectable } from '@angular/core'


@Injectable({ providedIn: 'root' })

export class TodoService {

  constructor(private http: HttpClient) { }

  updateTodoById(todo: Todo) {
    const path = `/projects/${todo.project_id}/todo/${todo.id}`

    return this.http.patch<Todo>(environment.apiUrl + path, todo)
  }

  createTodo(todo: Todo) {
    const path = '/todos'

    return this.http.post<Todo>(environment.apiUrl + path, todo)
  }

  toggleComplete(todo: Todo): void {
    this.updateTodoById(todo).subscribe()
  }
}
