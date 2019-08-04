import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, mapTo, startWith } from 'rxjs/operators';

import { TimeService } from '../common/time.service';

@Injectable({
  providedIn: 'root',
})
export class HelloServiceService {

  private counter: number;

  constructor(private timeService: TimeService) { 
    this.counter = 0;
  }

  greeting(name: string): Observable<string> {
    this.counter++;
    return timer(500).pipe(mapTo(`Hello ${name}! (${this.counter})`));
  }

  getUptime(): Observable<string> {
    return this.timeService.getUptime().pipe(
      map(uptime => formatUptime(uptime)),
      startWith('loading...')
    );
  }

  getTime(): Observable<string> {
    return this.timeService.getTime().pipe(
      map(time => formatTime(time)),
      startWith(formatTime(Date.now()))
    );
  }
}

function formatTime(value: number): string {
  return (new Date(value)).toTimeString().substr(0, 8);
}

function formatUptime(value: number): string {
  return Math.floor(value/3600000) + ':' + (new Date(value)).toUTCString().slice(-9, -4);
}
