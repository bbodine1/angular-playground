import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-footer-admin',
  standalone: true,
  imports: [CommonModule],
  template: ` <footer>Admin Footer</footer> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterAdminComponent {}
