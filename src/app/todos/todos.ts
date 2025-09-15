import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../service/todoService';
import { TodosType } from '../models/todos.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
todoService = inject(TodoService)
todoListItems = signal< Array<TodosType>>([])
ngOnInit(): void {
  console.log(this.todoService.todosList, 'listtststt')
  this.todoListItems.set(this.todoService.todosList)
}
}
