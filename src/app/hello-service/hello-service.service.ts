import { Injectable } from '@angular/core';
import { Observable, timer, interval } from 'rxjs';
import { map, mapTo, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HelloServiceService {

  private counter: number;
  private start: number;

  constructor() { 
    this.counter = 0;
    this.start = Date.now();
  }

  greeting(name: string): Observable<string> {
    this.counter++;
    return timer(500).pipe(mapTo(`Hello ${name}! (${this.counter})`));
  }

  getUptime(): Observable<string>{
    return interval(1000).pipe(
      map(() => formatUptime(Date.now() - this.start)),
      startWith('loading...')
    );
  }
}

function formatUptime(value: number): string {
  return Math.floor(value/3600000) + ':' + (new Date(value)).toUTCString().slice(-9, -4);
}
