import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ExamplesComponent } from './examples/examples.component';
import { StockMarketContainerComponent } from './stock-market/components/stock-market-container.component';

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
        component: StockMarketContainerComponent,
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
