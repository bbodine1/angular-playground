import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  FooterComponent,
  HeaderComponent,
  NavMainComponent,
} from '@ap/core-ui';

@Component({
  selector: 'core-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavMainComponent],
  template: `
    <lib-header />

    <lib-nav-main />

    <main>
      <router-outlet />
    </main>

    <lib-footer />
  `,
  styles: ``,
})
export class MainLayoutComponent {}
