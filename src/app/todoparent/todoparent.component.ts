import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoinputComponent } from '../todoinput/todoinput.component';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'apptodoparent',
  standalone: true,
  imports: [CommonModule, TodoinputComponent, TodolistComponent],
  templateUrl: './todoparent.component.html'
})
export class TodoparentComponent {
  todos: { text: string; completed: boolean }[] = [];

  addTodo(task: string) {
    const isDuplicate = this.todos.some(
      (todo) => todo.text.toLowerCase() === task.toLowerCase()
    );

    if (isDuplicate) {
      alert('This task already exists!');
      return;
    }

    this.todos.push({ text: task, completed: false });
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}