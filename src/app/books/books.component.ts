import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<any>;

  constructor() {
    this.books = new Array<any>();
   }

  ngOnInit() {
    this.books.push({ id: 101, name: "בראשית", price: 100});
    this.books.push({ id: 102, name: "שמות", price: 87});
    this.books.push({ id: 103, name: "ויקרא", price: 57});
  }
}