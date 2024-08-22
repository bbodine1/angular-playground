import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <img src="logo.svg" alt="" />

      <span class="divider"></span>

      <h1>Individual & Family</h1>
    </header>
  `,
  styles: `
  :host {
    --border-color: #5484A9;
    --background-color: #ffffff;
    --page-max-width: 1140px;
    --logo-width: 202px;  // Exact size of the logo
    --divider-color: #C8C6C4;

    display: grid;
    align-items: center;
    width: 100%;
    height: 72px;
    background-color: var(--background-color);
    box-shadow: inset 0 -3px 0 0 var(--border-color);

    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  header {
    display: grid;
    grid-template-columns: var(--logo-width) 1px 1fr;
    align-items: center;
    gap: 12px;
    translate: 0 -1.5px;
    width: 100%;
    height: 60px;
    max-width: var(--page-max-width);
    margin: 0 auto;
  }

  img {
    width: var(--logo-width);
  }

  .divider {
    height: 100%;
    width: 1px;
    background-color: var(--divider-color)
  }

  h1 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
