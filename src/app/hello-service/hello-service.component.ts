import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from './hello-service.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-hello-service',
  templateUrl: './hello-service.component.html',
  styleUrls: ['./hello-service.component.css'],
  providers: [CounterService]
})
export class HelloServiceComponent implements OnInit {

  name: string;
  greeting: string;

  constructor(private srv: HelloServiceService, private counter: CounterService) { }

  ngOnInit() {
    this.name = '';
  }

  greet()
  {
    this.counter.inc();
    this.srv.greeting2(this.name).subscribe((msg: string ) => { this.displayGreet(msg) });
  }

  displayGreet(message: string)
  {
    var c = this.counter.get();
    this.greeting = message + " (" + c + ")";
  }
}
