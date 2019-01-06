import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  value: number;

  constructor() { 
    this.value = 0;
  }

  inc()
  {
    this.value++;
  }

  get()
  {
    return this.value;
  }
}
