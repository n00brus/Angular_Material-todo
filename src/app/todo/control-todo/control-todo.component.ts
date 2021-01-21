import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-control-todo',
  templateUrl: './control-todo.component.html',
  styleUrls: ['./control-todo.component.css'],
})
export class ControlTodoComponent implements OnInit {
  newTodo = '';
  selectedTodo: Todo;
  todos: Todo[];
  profileForm = new FormGroup({
    editedText: new FormControl(''),
  });
  constructor(private todosService: TodoService) {
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  ngOnInit(): void {}
  AddTodo() {
    console.log();

    let newTodoObject: Todo = {
      id: +this.todos[this.todos.length - 1].id + 1,
      title: this.newTodo,
      completed: false,
    };
    console.log(newTodoObject);

    this.todosService.AddTodo(newTodoObject).subscribe((todo) => {
      this.todos = [...this.todos, todo];
    });
  }
  CompleteTodo(ev, id) {
    console.log(ev);

    let todo = this.todos.find((todo) => {
      if (id == todo.id) {
        return todo;
      }
    });
    if (todo.completed == true) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }

    this.todosService.MergeCompletedTodo(todo).subscribe((todo) => {
      this.todos.find((e) => {
        if (e.id == todo.id) {
          return todo;
        }
      });
    });
  }
  DeleteTodo(id) {
    console.log(id);

    this.todosService.DeleteTodo(id).subscribe((todo) => {
      this.todos = this.todos.filter((n) => n.id != id);
    });
  }
  EditTodo(ev, todo) {
    if (this.selectedTodo == todo) {
      this.SendEditedTodo(todo);
    } else {
      this.SelectTodo(todo);
    }
  }
  SelectTodo(todo) {
    this.profileForm.setValue({
      editedText: todo.title,
    });

    this.todos.find((todo) => {
      if (todo.selected) {
        return delete todo.selected;
      }
    });
    this.todos.find((c) => {
      if (c.id == todo.id) {
        return (c.selected = true);
      }
    });
    this.selectedTodo = todo;
  }
  SendEditedTodo(todo) {
    delete todo.selected;
    todo.title = this.profileForm.get('editedText').value;
    this.todosService.MergeCompletedTodo(todo).subscribe((mergedTodo) => {
      this.todos.find((todo) => {
        if (todo.id == mergedTodo.id) {
          return mergedTodo;
        }
      });
    });
    delete this.selectedTodo;
  }
}

// delete operation.selected;
