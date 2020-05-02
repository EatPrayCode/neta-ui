import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Feature, features } from '../org-tree.data';

declare const OrgChart: any;

@Component({
  selector: 'neta-org-tree',
  templateUrl: './org-tree.component.html',
  styleUrls: ['./org-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrgTreeComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  ngOnInit() {
    // this.init();
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  init() {

    window.onload = function () {
      var chart = new OrgChart(document.getElementById("tree"), {
        template: "derek",
        enableDragDrop: true,
        menu: {
          pdf: { text: "Export PDF" },
          png: { text: "Export PNG" },
          svg: { text: "Export SVG" },
          csv: { text: "Export CSV" }
        },
        nodeMenu: {
          details: { text: "Details" },
          add: { text: "Add New" },
          edit: { text: "Edit" },
          remove: { text: "Remove" },
        },
        nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img",
          field_number_children: "field_number_children"
        },
        nodes: [
          { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
          { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
          { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
          { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
        ]
      });
    };

  }

}
