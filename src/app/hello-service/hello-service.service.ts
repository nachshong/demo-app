import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';


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

    return timer(50).pipe(mapTo(this.counter + '. Hello ' + name));
  }

  greeting2(name: string): Observable<string>
  {
    this.counter++;

    return new Observable<string>((s) => { 
      setTimeout(() => {
        s.next(this.counter + ". Hello " + name);
      }, 50);
    });
  }
}