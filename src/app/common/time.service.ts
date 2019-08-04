import { Injectable } from '@angular/core';
import { timer, Observable, defer } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private _start: number;
  private _innerTimer: Observable<number>;
  private _logTick: number = 0;

  constructor() { 
    this._innerTimer = defer(() => {
      var now = new Date(Date.now());
      var dueTime = (1000 - now.getMilliseconds()) + 1000;
      var t = timer(dueTime, 1000);
      console.log(`A new timer created at ${now.toISOString()} with due time of ${dueTime}.`);
      return t;
    }).pipe(
      tap(i => { this._logTick && (i % this._logTick == 0) && console.log(`timer tick ${i}`) }),
      share()
    );
  }

  applicationStart() {
    this._start = Date.now();
  }

  get logOnTimerTick(): number {
    return this._logTick;
  }

  set logOnTimerTick(value: number) {
    this._logTick = value;
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
