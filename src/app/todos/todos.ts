import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../service/todoService';
import { TodosType } from '../models/todos.type';
import { catchError } from 'rxjs';

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
  this.todoService.getTodosFromApi().pipe(catchError(error=> {
    console.log("error:", error)
    throw error
  })).subscribe(todos=>{
    this.todoListItems.set(todos)
  })
}
}
