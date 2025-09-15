import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <app-header />
    <app-home />
    <router-outlet />
  `,
  styles: [
    `
      h1 {
        color: indigo;
      }
    `
  ],
})
export class App {
  protected readonly title = signal('My first Angular Application!!!!');
}
