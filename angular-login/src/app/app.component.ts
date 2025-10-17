import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="header">
      <strong>Angular Login</strong>
      <nav>
        <a routerLink="/login">Login</a>
        <span style="padding:0 0.5rem">|</span>
        <a routerLink="/dashboard">Dashboard</a>
      </nav>
    </header>

    <main class="main">
      <router-outlet></router-outlet>
    </main>

    <footer>
      Demo app · Angular 18 · Node 20 compatible
    </footer>
  `
})
export class AppComponent {}
