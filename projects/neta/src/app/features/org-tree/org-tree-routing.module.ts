import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgTreeComponent } from './org-tree/org-tree.component';

const routes: Routes = [
  {
    path: '',
    component: OrgTreeComponent,
    data: { title: 'neta.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgTreeRoutingModule {}
