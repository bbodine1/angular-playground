import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <img src="logo.svg" alt="" />
      <h1>Main Layout Header</h1>
    </header>
  `,
  styles: `
  :host {
    display: block;
    height: 72px;
    background-color: red;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
