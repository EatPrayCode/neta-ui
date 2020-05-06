import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ExamplesComponent } from './home/examples.component';
import { TicketsContainerComponent } from './tickets/components/tickets-container.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'tickets',
        pathMatch: 'full'
      },
      {
        path: 'tickets',
        component: TicketsContainerComponent,
        data: { title: 'neta.examples.menu.stocks' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
