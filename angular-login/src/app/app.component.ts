import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <header class="header">
      <strong>Angular Login</strong>
      <nav style="display:flex; align-items:center; gap:.5rem">
        <span *ngIf="auth.email() as e" style="margin-right:.5rem; opacity:.8">{{ e }}</span>
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
export class AppComponent {
  constructor(public auth: AuthService) {}
}
