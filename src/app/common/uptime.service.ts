import { Injectable } from '@angular/core';
import { timer, Observable, defer } from 'rxjs';
import { map, refCount, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UptimeService {

  private _start: number;
  private _inner: Observable<number>;

  constructor() { }

  applicationStart() {
    this._start = Date.now();
  }

  getUptime(): Observable<number> {
    return this._inner || (this._inner = defer(() => {
      var now: Date = new Date(Date.now());
      var dueTime: number = (1000 - now.getMilliseconds()) + 1000;
      console.log('new timer created.');
      return timer(dueTime, 1000);
    }).pipe(
      map(() => Date.now() - this._start),
      share()
    ));
  }
}
