import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { NotificationService } from '../notifications/notification.service';

@Injectable()
export class ServiceWorkedHandler {

  constructor(private swUpdate: SwUpdate, private notificationsService: NotificationService) {

    debugger;

    this.swUpdate.available.subscribe(evt => {
      this.notificationsService.info('Update Available, Reload the page');
    });

    if (!this.swUpdate.isEnabled) {
      console.log('Nope 🙁');
      this.swUpdate.activateUpdate();
    }

  }

}
