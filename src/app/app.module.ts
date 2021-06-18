import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { ModalNewProjectComponent } from './modal-new-project/modal-new-project.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDividerModule } from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'

import { CardRowComponent } from './cardRow/cardRow.component'
import { CardComponent } from './card/card.component'
import { AppComponent } from './app.component';
import { NewProjectDialogComponent } from './new-project-dialog/new-project-dialog.component'

@NgModule({
  declarations: [
    NewProjectDialogComponent,
    ModalNewProjectComponent,
    CardRowComponent,
    CardComponent,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    BrowserModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
