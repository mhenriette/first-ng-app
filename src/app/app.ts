import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <app-header />
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
