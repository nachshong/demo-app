import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UptimeService {

  private _start: number;

  constructor() { }

  applicationStart() {
    this._start = Date.now();
  }

  getUptime(): Observable<number> {
    var now: Date = new Date(Date.now());
    var dueTime: number = (1000 - now.getMilliseconds()) + 1000;

    return timer(dueTime, 1000).pipe(
      map(() => Date.now() - this._start)
    );
  }
}
