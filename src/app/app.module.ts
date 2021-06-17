import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'
import { CardComponent } from './card/card.component'
import { CardRowComponent } from './cardRow/cardRow.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardRowComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
