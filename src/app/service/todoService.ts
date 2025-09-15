import { Injectable } from '@angular/core';
import { TodosType } from '../models/todos.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosList: Array<TodosType>=[
    {
      title: "Groceries",
      id: 0,
      userId: 1,
      completed: true
    },
    {
      title: "Errands",
      id: 1, 
      userId: 2,
      completed: false
    },
    {
      title: "Coding",
      id: 2, 
      userId: 3,
      completed: false
    },
    {
      title: "Sports",
      id: 4, 
      userId: 4,
      completed: false
    },
  ]
}
