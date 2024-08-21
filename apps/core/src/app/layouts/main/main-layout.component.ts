import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'core-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <h1>Main Layout Header</h1>
    </header>

    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/admin">Admin</a>
    </nav>

    <main>
      <router-outlet />
    </main>

    <footer>Main Footer</footer>
  `,
  styles: ``,
})
export class MainLayoutComponent {}
