import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'apptodolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input() todos: { text: string; completed: boolean }[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
}