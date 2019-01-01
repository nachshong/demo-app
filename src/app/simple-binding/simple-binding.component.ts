import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-binding',
  templateUrl: './simple-binding.component.html',
  styleUrls: ['./simple-binding.component.css']
})
export class SimpleBindingComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit() {
    this.firstName = "";
    this.lastName = "";
  }

  setFirstName(val: any)
  {
    if (val && val.target)
    {
      this.setFirstNameByEvent(val);
    }
  }

  setFirstNameByEvent(e : KeyboardEvent) {
    this.firstName = (<HTMLInputElement>e.target).value;
  }

  setLastName(value: string)
  {
    this.lastName = value;
  }

  update(value: string) {
    this.firstName = value;
  }
}
