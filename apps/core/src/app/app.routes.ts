import { Route } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./views/about/about.component').then((c) => c.AboutComponent),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin/admin-layout.component').then(
        (c) => c.AdminLayoutComponent
      ),
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/admin-dashboard/admin-dashboard.component').then(
            (c) => c.AdminDashboardComponent
          ),
      },
    ],
  },
];
