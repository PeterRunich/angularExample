import { Component, Input, Inject } from '@angular/core'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormArray, FormBuilder } from '@angular/forms'
import { TodoService } from '../services/todo.service'
import { Project } from "../card/project"
import { ProjectService } from '../services/project.service'

@Component({
  selector: 'app-modal-new-project',
  templateUrl: './modal-new-project.component.html',
  styleUrls: ['./modal-new-project.component.sass']
})

export class ModalNewProjectComponent {
  @Input() projects: Project[] = []

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, { data: this.projects })
  }
}

// Modal windown component.

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./modal-new-project.component.sass']
})

export class DialogContentExampleDialog{

  projectForm = this.fb.group({
    text: [''],
    project_id: [''],
    new_project: this.fb.array([])
  })

  constructor(private todoService: TodoService, @Inject(MAT_DIALOG_DATA) public projects: Project[], private fb: FormBuilder, private projectService: ProjectService) {}

  get new_project() {
    return this.projectForm.get('new_project') as FormArray
  }

  addNewProject() {
    this.new_project.push(this.fb.control(''))
  }

  projectSelected(): void {
    if (this.projectForm.value.project_id !== "new") return this.new_project.clear();

    console.log('pora')
    this.addNewProject()
  }

  onSubmit() {
    console.log(this.projectForm.value)
    if (this.projectForm.value.project_id === "new") {
      console.log(this.new_project.value[0])
      this.projectService.createProject({ title: this.new_project.value[0] }).subscribe(projectRes=>{
        projectRes.todos = []
        console.log('push to arra', projectRes)
        this.projects.push(projectRes)
        this.todoService.createTodo({ text: this.projectForm.value.text, isCompleted: false , project_id: projectRes.id }).subscribe( res => { 
          this.projects.filter(pr => pr.id == projectRes.id)[0].todos.push(res) 
        })
      })
    } else {
      this.todoService.createTodo({ text: this.projectForm.value.text, isCompleted: false , project_id: this.projectForm.value.project_id }).subscribe( res => { 
        console.log(res, this.projects.filter(pr => pr.id == this.projectForm.value.project_id)[0])
        this.projects.filter(pr => pr.id == this.projectForm.value.project_id)[0].todos.push(res) 
      })
    }
  }
}