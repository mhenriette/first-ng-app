import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';

@Component({
  selector: 'app-home',
  imports: [Greetings],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  parentGreetings= signal('this is the data from the parent component')

}
