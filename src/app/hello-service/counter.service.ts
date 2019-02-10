import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  private value: number;

  constructor() { 
    this.value = 0;
  }

  get current() : number {
    return this.value;
  }

  next(): number {
    return ++this.value;
  }

}
