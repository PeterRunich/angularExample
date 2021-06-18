import { Component, Input, OnInit } from "@angular/core"
import { TodoService } from "../services/todo.service"
import { Todo } from "../models/todo.model"


@Component({
	selector:    "app-cardRow",
	templateUrl: "./cardRow.component.html",
	styleUrls:   ["./cardRow.component.sass"]
})

export class CardRowComponent implements OnInit {

	@Input() todo: Todo = new Todo()
	completed!: boolean
	
	constructor(private todoService: TodoService) { }

	ngOnInit() {
		this.completed = this.todo.isCompleted
	}

	toggler(): void {
		this.todo.isCompleted = !this.todo.isCompleted
		
		this.todoService.toggleComplete(this.todo)
	}
}