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

  changeToDavid() {
    this.characterName = "דוד המלך"
  }

  changeToJosef() {
    this.characterName = "יוסף הצדיק"
  }

  setFirstNameByEvent(event: KeyboardEvent) {
    this.firstName = (<HTMLInputElement>event.target).value;
  }

  setFirstNameByValue(value: string) {
    this.firstName = value;
  }

  setFirstNameByInput(input: HTMLInputElement) {
    this.firstName = input.value;
  }

  incBoxSize() {
    this.boxSize += 10;
  }

  decBoxSize() {
    if (this.boxSize > 100) {
      this.boxSize -= 10;
    }

    return false;
  }

}
