import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'apptodoinput',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todoinput.component.html'
})
export class TodoinputComponent {
  @Output() add = new EventEmitter<string>();
  errorMessage: string = '';

  @ViewChild('taskInput') taskInput!: ElementRef;

  addTask(task: string) {
    if (!task?.trim()) {
      this.errorMessage = 'Task cannot be empty!';
      return;
    }
    
    this.errorMessage = '';
    this.add.emit(task.trim());
  }
}