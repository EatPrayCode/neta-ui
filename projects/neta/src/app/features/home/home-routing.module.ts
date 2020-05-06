import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppointmentsContainerComponent } from './appointments/components/appointments-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'appointments',
        pathMatch: 'full'
      },
      {
        path: 'appointments',
        component: AppointmentsContainerComponent,
        data: { title: 'neta.examples.menu.appointments' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
