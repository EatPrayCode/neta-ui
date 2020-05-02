import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { OrgTreeRoutingModule } from './org-tree-routing.module';
import { OrgTreeComponent } from './org-tree/org-tree.component';

@NgModule({
  declarations: [OrgTreeComponent],
  imports: [CommonModule, SharedModule, OrgTreeRoutingModule]
})
export class OrgTreeModule {}
