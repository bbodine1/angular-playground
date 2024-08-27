import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HeaderAdminComponent,
  NavAdminComponent,
  FooterAdminComponent,
} from '@ap/core-ui';

@Component({
  selector: 'core-admin-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavAdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
  ],
  template: `
    <lib-header-admin />

    <lib-nav-admin />

    <main>
      <router-outlet />
    </main>

    <lib-footer-admin />
  `,
  styles: ``,
})
export class AdminLayoutComponent {}
