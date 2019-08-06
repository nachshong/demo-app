import { Injectable } from '@angular/core';
import { timer, Observable, defer } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  static logTimerTick: number = 0;

  private _start: number;
  private _innerTimer: Observable<number>;

  constructor() { 
    this._innerTimer = defer(() => {
      var now = new Date(Date.now());
      var dueTime = (1000 - now.getMilliseconds()) + 1000;
      var t = timer(dueTime, 1000);
      console.log(`A new timer created at ${now.toISOString()} with due time of ${dueTime}.`);
      return t;
    }).pipe(
      tap(i => { TimeService.logTimerTick && (i % TimeService.logTimerTick == 0) && console.log(`timer tick ${i}`) }),
      share()
    );
  }

  applicationStart() {
    this._start = Date.now();
  }

  getTime(): Observable<number> {
    return this._innerTimer.pipe(
      map(() => Date.now())
    );
  }

  getUptime(): Observable<number> {
    return this._innerTimer.pipe(
      map(() => Date.now() - this._start),
    );
  }
}
