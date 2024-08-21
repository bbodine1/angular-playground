import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'core-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <h1>Admin Layout Header</h1>
    </header>

    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
    </nav>

    <main>
      <router-outlet />
    </main>

    <footer>Admin Footer</footer>
  `,
  styles: ``,
})
export class AdminLayoutComponent {}
