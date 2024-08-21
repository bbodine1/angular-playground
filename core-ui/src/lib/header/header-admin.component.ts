import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-header-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <h1>Admin Layout Header</h1>
    </header>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderAdminComponent {}
