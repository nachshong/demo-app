import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name: string;
  mySize: number;

  constructor() { }

  ngOnInit() {
    this.name = "יוסף הצדיק";
    this.mySize = 10;
  }

  changeToDavid()
  {
    this.name = "דוד המלך"
  }

  changeToJosef()
  {
    this.name = "יוסף הצדיק"
  }

  onInput(e: any)
  {
    this.name = e.target.value;
  }

  incSize()
  {
    this.mySize += 10;
  }
}
