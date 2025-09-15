import { inject, Injectable } from '@angular/core';
import { TodosType } from '../models/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http = inject(HttpClient)

  getTodosFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Array<TodosType>>(url)
  }
}
