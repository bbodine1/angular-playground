import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@ap/core-ui';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'core-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  template: `
    <lib-header />

    <main>
      <div class="container">
        <div *ngIf="auth.user$ | async as user">
          <h2>Welcome, {{ user.name }}!</h2>
          <p>Email: {{ user.email }}</p>
        </div>
        <router-outlet />
      </div>
    </main>

    <lib-footer />
  `,
  styles: `
    /* ... existing styles ... */
  `,
})
export class MainLayoutComponent {
  constructor(public auth: AuthService) {}
}
