import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent, HeaderComponent } from '@ap/core-ui';

@Component({
  selector: 'core-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <lib-header />

    <main>
      <div class="container">
        <router-outlet />
      </div>
    </main>

    <lib-footer />
  `,
  styles: `
    main {
      min-height: calc(100vh - 72px - 116px);
    }

    .container {
      max-width: 1140px;
      margin: 0 auto;
    }
  `,
})
export class MainLayoutComponent {}
