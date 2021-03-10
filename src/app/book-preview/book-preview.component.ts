import { Book } from './../classes/book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book;

  constructor() {}

  ngOnInit(): void {}

}
