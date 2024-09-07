import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <img src="logo.svg" alt="" />
      <span class="divider"></span>
      <p class="header-title">Individual & Family</p>
      <div class="auth-buttons">
        <button
          *ngIf="(auth.isAuthenticated$ | async) === false"
          (click)="auth.loginWithRedirect()"
        >
          Log in
        </button>
        <button
          *ngIf="auth.isAuthenticated$ | async"
          (click)="
            auth.logout({
              logoutParams: { returnTo: this.window.document.location.origin }
            })
          "
        >
          Log out
        </button>
      </div>
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

    .header-title {
      margin: 0;
      font-size: inherit;
      font-weight: inherit;
    }

    .auth-buttons {
      margin-left: auto;
    }
    button {
      padding: 8px 16px;
      background-color: #3B6B90;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(public auth: AuthService) {}

  window: Window = window;
}
