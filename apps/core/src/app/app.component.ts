import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@angular-playground/ui';

@Component({
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  selector: 'app-root',
  template: `
    <lib-button />
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'core';
}
