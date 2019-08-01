import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, mapTo, startWith } from 'rxjs/operators';

import { UptimeService } from '../common/uptime.service';

@Injectable({
  providedIn: 'root',
})
export class HelloServiceService {

  private counter: number;

  constructor(private uptimeService: UptimeService) { 
    this.counter = 0;
  }

  greeting(name: string): Observable<string> {
    this.counter++;
    return timer(500).pipe(mapTo(`Hello ${name}! (${this.counter})`));
  }

  getUptime(): Observable<string>{
    return this.uptimeService.getUptime().pipe(
      map(uptime => formatUptime(uptime)),
      startWith('loading...')
    );
  }
}

function formatUptime(value: number): string {
  return Math.floor(value/3600000) + ':' + (new Date(value)).toUTCString().slice(-9, -4);
}
