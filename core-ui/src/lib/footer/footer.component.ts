import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="language">
        <div class="inner">
          <img src="lang.svg" alt="" />
          <a class="active">English</a>
          <a>Español</a>
          <a>Amharic</a>
        </div>
      </div>

      <div class="container">
        <div class="inner">
          <div class="brand">
            <b>CoverME.gov</b>
            <p>All Rights Reserved.</p>
          </div>

          <div class="help">
            <b>Get Help</b>
            <button>Live Chat</button>
            <button>(866) 636-0355 / TTY 711</button>
          </div>
        </div>
      </div>
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
      background-color: var(--secondary-bg, #F5F5F5);
      height: 36px;

      .inner {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 12px;
        max-width: var(--page-max-width, 1140px);
        margin: 0 auto;
        color: #41454A;
      }

      a:not(.active) {
        text-decoration: underline;
        cursor: pointer;
        color: #3D5D6F;
      }
    }

    .container {
      display: grid;
      background-color: var(--primary-bg, #E1DFDD);
      height: 80px;

      .inner {
        display: grid;
        grid-template-columns: 1fr max-content;
        align-items: center;
        align-self: center;
        max-width: var(--page-max-width, 1140px);
        margin: 0 auto;
        height: 48px;
        width: 100%;
      }

      .brand {
        font-size: 16px;
        color: #323130;

        p {
          margin: 0;
        }
      }

      .help {
        display: flex;
        align-items: center;
        gap: 12px;
        height: 100%;
        background-color: #ffffff;
        border-radius: 24px;
        padding: 0 12px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
