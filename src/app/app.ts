import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Angular Nested Routing With Guards');

  protected readonly environment;
  constructor() {
    console.log('App initialized');
    console.log('API URL:', environment.apiUrl);
    this.environment = environment;
  }
}
