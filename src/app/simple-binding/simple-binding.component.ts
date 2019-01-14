import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-binding',
  templateUrl: './simple-binding.component.html',
  styleUrls: ['./simple-binding.component.css']
})
export class SimpleBindingComponent implements OnInit {

  characterName: string;
  firstName: string;
  lastName: string;
  boxSize: number;

  constructor() { }

  ngOnInit() {
    this.characterName = 'דוד המלך';
    this.firstName = '';
    this.lastName = '';
    this.boxSize = 100;
  }

  changeToDavid()
  {
    this.characterName = "דוד המלך"
  }

  changeToJosef()
  {
    this.characterName = "יוסף הצדיק"
  }

  setFirstName(value : KeyboardEvent | string)
  {
    value = value || '';

    if (typeof value === 'string') {
      this.firstName = value;
    } else if (typeof value === 'object') {
      this.firstName = (<HTMLInputElement>value.target).value;
    }
  }

  incBoxSize()
  {
    this.boxSize += 10;
  }

}
