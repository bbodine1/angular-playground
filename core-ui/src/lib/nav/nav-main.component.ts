import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'lib-nav-main',
  standalone: true,
  imports: [RouterLink, TuiButton],
  template: `
    <nav>
      <button routerLink="/" size="m" tuiButton>Consumer/Family Portal</button>
      <button routerLink="/" size="m" tuiButton>Returning User</button>
      <button routerLink="/about" size="m" tuiButton>
        Broker Agency Portal
      </button>
      <button routerLink="/admin" size="m" tuiButton>HBX Portal</button>
      <button routerLink="/" size="m" tuiButton>Broker Registration</button>
    </nav>
  `,
  styles: `
    nav {
      display: flex;
      gap: 8px
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMainComponent {}
