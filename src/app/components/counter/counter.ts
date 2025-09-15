import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  value = signal(0)
  increment(){
    this.value.update(value => value + 1)
  }
  decrement(){
    this.value.update(value => value - 1)
  }
  reset(){
    this.value.set(0)
  }
}
