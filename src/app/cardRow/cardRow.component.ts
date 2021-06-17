import { Component, Input } from "@angular/core"
import { Todo } from "../card/todo"
import { TodoService } from "../services/todo.service"

@Component({
	selector: "app-cardRow",
	templateUrl: "./cardRow.component.html",
	styleUrls: ["./cardRow.component.sass"]
})

export class CardRowComponent {
	@Input() todo: Todo = { id: 0, text: '' ,isCompleted: false, project_id: 0}

	constructor(private todoService: TodoService) {}

	toggler(): void {
		console.log(this.todo.isCompleted)
		this.todo.isCompleted = !this.todo.isCompleted
		this.todoService.toggleComplete(this.todo)
	}
}