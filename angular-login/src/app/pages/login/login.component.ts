import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Welcome back</h2>
      <p style="margin-top: -0.5rem; color: color-mix(in oklab, CanvasText 70%, transparent)">Demo login — enter anything</p>

      <form (ngSubmit)="login()" #loginForm="ngForm" style="display:grid; gap: 0.75rem; margin-top:1rem">
        <div>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" [(ngModel)]="email" required placeholder="you@example.com"/>
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" name="password" type="password" [(ngModel)]="password" required placeholder="••••••••"/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  `
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    // No authentication — navigate to dashboard
    this.router.navigateByUrl('/dashboard');
  }
}
