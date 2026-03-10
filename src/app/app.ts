import { JsonPipe } from '@angular/common';
import { Component, signal, VERSION } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavOutlet,
} from '@ng-bootstrap/ng-bootstrap/nav';
import { environment } from '../environments/environment';
import { ThemePickerComponent } from './shared/theme-picker.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    JsonPipe,
    NgbNavContent,
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLinkButton,
    NgbNavLinkBase,
    NgbNavOutlet,
    ThemePickerComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Angular Bootstrap Starter Template');
  active = 1;
  navbarCollapsed = true;

  protected readonly environment;
  version = VERSION.full;
  constructor() {
    console.log('App  Constructor initialized');
    console.log('API URL:', environment.apiUrl);
    this.environment = environment;
  }
}
