import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, TuiRoot],
  selector: 'core-root',
  template: `
    <tui-root>
      <!-- content of your app -->

      <!--
     If you need, you can add something between Taiga portal layers:
    -->
      <ng-container ngProjectAs="tuiOverContent">
        <!-- Content over app content -->
      </ng-container>
      <ng-container ngProjectAs="tuiOverDialogs">
        <!-- Content over dialogs -->
      </ng-container>
      <ng-container ngProjectAs="tuiOverAlerts">
        <!-- Content over alerts -->
      </ng-container>
      <ng-container ngProjectAs="tuiOverDropdowns">
        <!-- Content over dropdowns -->
      </ng-container>
      <ng-container ngProjectAs="tuiOverHints">
        <!-- Content over hints -->
      </ng-container>

      <router-outlet></router-outlet>
    </tui-root>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'Enroll Frontend Demo';
}
