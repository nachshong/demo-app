import { Injectable } from '@angular/core';
import { HelloServiceComponent } from './hello-service.component';

@Injectable()
export class CounterServiceService {

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
