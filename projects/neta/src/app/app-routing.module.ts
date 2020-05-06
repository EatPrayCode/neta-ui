import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CallbackComponent } from './core/auth/auth/components/callback/callback.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./features/landing/about.module').then(m => m.LandingModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'feature-list',
    loadChildren: () =>
      import('./features/feature-list/feature-list.module').then(
        m => m.FeatureListModule
      )
  },
  {
    path: 'org-tree',
    loadChildren: () =>
      import('./features/org-tree/org-tree.module').then(
        m => m.OrgTreeModule
      )
  },
  {
    path: 'ticket-list',
    loadChildren: () =>
      import('./features/ticket-list/feature-list.module').then(
        m => m.TicketListModule
      )
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./features/examples/examples.module').then(m => m.ExamplesModule)
  },
  { path: 'callback', component: CallbackComponent },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
