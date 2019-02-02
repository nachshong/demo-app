import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-binding',
  templateUrl: './simple-binding.component.html',
  styleUrls: ['./simple-binding.component.css']
})
export class SimpleBindingComponent implements OnInit {

  characterName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  boxSize: number;

  constructor() { }

  ngOnInit() {
    this.characterName = 'דוד המלך';
    this.firstName = '';
    this.middleName = '';
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

  setMiddleNameByInput(input: HTMLInputElement) {
    this.middleName = input.value;
  }

  setMiddleNameByValue(value: string) {
    this.middleName = value;
  }

  incBoxSize() {
    if (this.boxSize < 200) {
      this.boxSize += 10;
    }

    return false;
  }

  decBoxSize() {
    if (this.boxSize > 100) {
      this.boxSize -= 10;
    }

    return false;
  }

}
