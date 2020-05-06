import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Appointment } from './appointments.model';
import { ApiService } from '../../../core/api/api.service';

@Injectable()
export class AppointmentsService {
  constructor(private apiService: ApiService) {}

  retrieveStock(symbol: string): Observable<any> {
    return this.apiService.getTickets(symbol);
  }

}
