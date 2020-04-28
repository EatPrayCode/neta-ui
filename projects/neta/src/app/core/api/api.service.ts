import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { UtilsService } from '../utils/utils.service';
import { forkJoin } from 'rxjs'; // RxJS 6 syntax
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpService: HttpService,
    private utils: UtilsService
  ) {}

  getTickets(payload): Observable<any> {
    const url = `https://netaconnect-nestjs.herokuapp.com/tickets`;
    return this.httpService.get(url);
  }

  buildResult(symbol: string): any {
    return of({
      symbol,
      exchange: 'Nasdaq',
      last: '124',
      ccy: 'USD',
      change: '1',
      changePositive: true,
      changeNegative: false,
      changePercent: '0.81'
    });
  }

}
