import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="language">
        <div class="inner">
          <div>Language</div>
          <a>English</a>
          <a>Español</a>
          <a>Amharic</a>
        </div>
      </div>

      <div class="container">container</div>
    </footer>
  `,
  styles: `
    :host {
      --primary-bg: #E1DFDD;
      --secondary-bg: #F5F5F5;
      --page-max-width: 1140px;

      display: grid;

      font-family: 'Barlow', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    .language {
      background-color: var(--secondary-bg);
      height: 36px;

      .inner {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 12px;
        max-width: var(--page-max-width);
        margin: 0 auto;



      }
    }

    .container {
      background-color: var(--primary-bg);
      height: 80px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
