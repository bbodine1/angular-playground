import { Component } from '@angular/core';
import { NavMainComponent } from '@ap/core-ui';

@Component({
  selector: 'core-home',
  standalone: true,
  imports: [NavMainComponent],
  template: `
    <div class="header-content">
      <h1>Welcome to CoverME.gov</h1>

      <h2>Maine's Official Health Insurance Marketplace</h2>

      <lib-nav-main />
    </div>

    <div class="header-image">
      <img src="cm-website-header.jpg" alt="CoverME.gov header image" />
    </div>
  `,
  styles: `
    :host {
      color: #3b6b90;
    }

    .header-image {
      width: 100%;
      overflow: hidden;
    }

    .header-image img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    h1 {
      font-size: 40px;
      font-weight: 700;
      line-height: 32px;
      margin: 20px 0 10px;
    }

    h2 {
      font-size: 28px;
      font-weight: 400;
      line-height: 32px;
      margin: 0 0 40px;
    }

    .header-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 20px;
      margin-top: 60px;
      margin-bottom: 40px;
    }
  `,
})
export class HomeComponent {}
