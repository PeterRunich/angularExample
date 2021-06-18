import { NewProjectDialogComponent } from '../new-project-dialog/new-project-dialog.component'
import { MatDialog } from '@angular/material/dialog'
import { Project } from '../models/project.model'
import { Component, Input } from '@angular/core'

@Component({
  selector:    'app-modal-new-project',
  templateUrl: './modal-new-project.component.html',
  styleUrls:   ['./modal-new-project.component.sass']
})

export class ModalNewProjectComponent {
  @Input() projects: Project[] = []

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(NewProjectDialogComponent, { data: this.projects, width: '500px' })
  }
}