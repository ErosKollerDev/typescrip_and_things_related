import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div style="padding: 1.2rem">
      <h2>Dashboard</h2>
      <p>You are logged in. This is a simple placeholder dashboard.</p>
      <button (click)="logoff()" title="Log off">Log off</button>
    </div>
  `
})
export class DashboardComponent {
  constructor(private router: Router) {}
  logoff() {
    this.router.navigateByUrl('/login');
  }
}
