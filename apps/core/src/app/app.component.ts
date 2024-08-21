import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'core-root',
  template: `<router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'Enroll Frontend Demo';
}
