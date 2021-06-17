import { Component, Input, Inject } from '@angular/core'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormGroup, FormControl, FormArray } from '@angular/forms'
import { TodoService } from '../services/todo.service'
import { Project } from "../card/project"

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
  projectForm = new FormGroup({
    text: new FormControl(''),
    project_id: new FormControl('')
  })

  constructor(private todoService: TodoService, @Inject(MAT_DIALOG_DATA) public projects: Project[]) {}

  onSubmit() {
    this.todoService.createTodo({ text: this.projectForm.value.text, isCompleted: false , project_id: this.projectForm.value.project_id }).subscribe( res => { 
      console.log(res)
      this.projects.filter(pr => pr.id == this.projectForm.value.project_id)[0].todos.push(res) 
    })
  }
}