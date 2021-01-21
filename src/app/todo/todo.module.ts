import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTodoComponent } from './control-todo/control-todo.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ControlTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [
    ControlTodoComponent,
    MatButtonModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [HttpClientModule],
})
export class TodoModule {}
