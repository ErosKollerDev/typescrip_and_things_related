import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Holds the currently logged-in user's email (null when logged out)
  readonly email = signal<string | null>(null);

  setEmail(email: string) {
    this.email.set(email);
  }

  clear() {
    this.email.set(null);
  }
}
