import { Component } from '@angular/core';
import { NavMainComponent } from '@ap/core-ui';

@Component({
  selector: 'core-home',
  standalone: true,
  imports: [NavMainComponent],
  template: `
    <h1>Welcome to CoverME.gov</h1>

    <p>Maine's Official Health Insurance Marketplace</p>

    <lib-nav-main />
  `,
  styles: ``,
})
export class HomeComponent {}
