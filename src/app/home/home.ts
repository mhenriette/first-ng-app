import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greetings, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  parentGreetings= signal('this is the data from the parent component')

}
