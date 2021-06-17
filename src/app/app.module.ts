import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { CardComponent } from './card/card.component'
import { CardRowComponent } from './cardRow/cardRow.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ModalNewProjectComponent, DialogContentExampleDialog } from './modal-new-project/modal-new-project.component'
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardRowComponent,
    ModalNewProjectComponent,
    DialogContentExampleDialog
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
