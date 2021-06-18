import { Todo } from "./todo.type"

export interface Project {
	id: number,
	title: string,
	todos: Todo[]
}