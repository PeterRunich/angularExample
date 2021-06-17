import { Component, Input, OnInit } from "@angular/core"
import { Todo } from "../card/todo"
import { TodoService } from "../services/todo.service"

@Component({
	selector: "app-cardRow",
	templateUrl: "./cardRow.component.html",
	styleUrls: ["./cardRow.component.sass"]
})

export class CardRowComponent implements OnInit {
	@Input() todo: Todo = { id: 0, text: '', isCompleted: false, project_id: 0 }
	completed: boolean = false

	constructor(private todoService: TodoService) { }

	ngOnInit() {
		this.completed = this.todo.isCompleted
	}

	toggler(): void {
		console.log(this.todo.isCompleted)
		this.todo.isCompleted = !this.todo.isCompleted
		this.todoService.toggleComplete(this.todo)
	}

	test() {
		console.log(this)
	}
}