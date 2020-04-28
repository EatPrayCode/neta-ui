import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Stock } from './stock-market.model';
import { ApiService } from '../../../core/api/api.service';

@Injectable()
export class StockMarketService {
  constructor(private apiService: ApiService) {}

  retrieveStock(symbol: string): Observable<any> {
    return this.apiService.getTickets(symbol);
  }

}
