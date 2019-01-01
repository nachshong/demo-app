import { Injectable } from '@angular/core';
import { Observable, Subscriber, timer } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class HelloServiceService {

  counter: number;

  constructor() { 
    this.counter = 0;
  }

  makeGreet(name: String) {
    return this.counter + '. Hello ' + name;
  }

  greeting(name: string): Observable<string>
  {
    this.counter++;

    return timer(1).pipe(mapTo(this.counter + '. Hello ' + name));
  }

  greeting2(name: string): Observable<string>
  {
    var subs: Subscriber<string>;
    var obsrv = new Observable<string>((s) => { subs = s});

    setTimeout(() => {
      subs.next(this.counter + ". Hello " + name);
    }, 1);

    return obsrv;
  }
}