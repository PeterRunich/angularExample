import { ProjectService } from '../services/project.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormArray, FormBuilder } from '@angular/forms'
import { TodoService } from '../services/todo.service'
import { Component, Inject } from '@angular/core'
import { plainToClass } from 'class-transformer'
import { Project } from '../models/project.model'
import { Todo } from '../models/todo.model'

@Component({
  selector:    'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls:   ['./new-project-dialog.component.sass']
})

export class NewProjectDialogComponent {

  projectForm = this.fb.group({
    text:       [''],
    project_id: [''],
    new_project: this.fb.array([])
  })

  constructor(@Inject(MAT_DIALOG_DATA) public projects: Project[], 
              private projectService: ProjectService,
              private todoService: TodoService, 
              private fb: FormBuilder, 
              ) {}

  get new_project() {
    return this.projectForm.get('new_project') as FormArray
  }

  addNewProject() {
    this.new_project.push(this.fb.control(''))
  }

  projectSelected(): void {
    if (this.projectForm.value.project_id !== "new") return this.new_project.clear();

    this.addNewProject()
  }

  onSubmit() {
    if (this.projectForm.value.project_id === "new") {
      this.__stratergyForAlredyExistingProject()
    } else {
      this.__stratergyNotAlredyExistingProject()
    }
  }

  __stratergyForAlredyExistingProject(): void {
    const fromPlainProject = { title: this.new_project.value[0] }
    let project = plainToClass(Project, fromPlainProject)

    this.projectService.createProject(project).subscribe(projectRes => {
      project = plainToClass(Project, projectRes) 
      const fromPlainTodo = { text: this.projectForm.value.text, isCompleted: false, project_id: project.id }
      const todo = plainToClass(Todo, fromPlainTodo)

      this.todoService.createTodo(todo).subscribe( todoRes => {
        project.todos = [plainToClass(Todo, todoRes)]
        this.projects.push(project) 
        console.log(this.projects)
      })
    })
  }

  __stratergyNotAlredyExistingProject(): void {
    const fromPlainTodo = { text: this.projectForm.value.text, isCompleted: false, project_id: this.projectForm.value.project_id }
    const todo = plainToClass(Todo, fromPlainTodo)

    this.projectForm.value
    this.todoService.createTodo(todo).subscribe(res => {  
      const project = this.projects.filter(project => project.id == fromPlainTodo.project_id)[0]
      project.todos.push(res)
    })
  }

}