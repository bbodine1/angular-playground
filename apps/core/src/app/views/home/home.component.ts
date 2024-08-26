import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'core-home',
  standalone: true,
  imports: [TuiButton, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>home works!</p>

    <button size="m" tuiButton>Medium</button>
  `,
  styles: ``,
})
export class HomeComponent {}
