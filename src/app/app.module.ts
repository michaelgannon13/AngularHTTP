import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { DataComponent } from './components/data/data.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AlbumsComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
