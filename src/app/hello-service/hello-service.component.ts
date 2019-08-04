import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CounterService } from '../common/counter.service';
import { HelloServiceService } from './hello-service.service';

@Component({
  selector: 'app-hello-service',
  templateUrl: './hello-service.component.html',
  styleUrls: ['./hello-service.component.css'],
  providers: [CounterService]
})
export class HelloServiceComponent implements OnInit, OnDestroy {

  private readonly defaultName: string = 'Ploni Almoni';

  name: string;
  greeting: string;
  counter: number;
  uptime1: string;
  uptime2: string;
  uptime3: Observable<string>;
  uptime4: string;

  private subscription2: Subscription;
  private dispose: Subject<void>;

  constructor(private helloService: HelloServiceService, private counterService: CounterService) { }

  ngOnInit() {
    this.name = '';
    this.greeting = '';
    this.counter = this.counterService.current;
    this.dispose = new Subject<void>();
  }
    
  greet() {
    let name = this.name || this.defaultName;

    this.helloService.greeting(name).subscribe(value => {
      this.greeting = value;
    });
  }

  next() {
    this.counter = this.counterService.next();
  }

  initUptime1() {
    this.helloService.getUptime().pipe(takeUntil(this.dispose)).subscribe(value => {
      this.uptime1 = value
    });
  }

  initUptime2() {
    this.subscription2 = this.helloService.getUptime().subscribe(value => {
      this.uptime2 = value
    });
  }

  initUptime3() {
    this.uptime3 = this.helloService.getUptime();
  }

  // memory leak!
  initUptime4() {
    this.helloService.getUptime().subscribe(value => {
      this.uptime4 = value
    });
  }

  ngOnDestroy() {
    this.dispose.next();
    
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }
}
