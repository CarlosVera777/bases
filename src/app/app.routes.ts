import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { IsAdminGuard } from './shared/guards/is-admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then((m) => m.StoreModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then((m) => m.NotificationsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
    canActivate: [IsAdminGuard]
  },
  {
    path: 'demo',
    loadComponent: () => import('./demo/demo.component').then((m) => m.DemoComponent)
  },
  {
    path: 'not-found',
    //loadComponent: () => import('./shared/pages/not-found/not-found.component').then((m) => m.NotFoundComponent)
    loadComponent: async () => {
      const m = await import('./shared/pages/not-found/not-found.component');
      return m.NotFoundComponent
    }
  },
  {
    path: '**',
    //redirectTo: '',
    //pathMatch: 'full',
    loadComponent: () => import('./shared/pages/not-found/not-found.component').then((m) => m.NotFoundComponent)
  }
];
