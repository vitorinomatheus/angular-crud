import { Book } from './../services/bookStruct.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent{

  book!: Book;

  constructor(
    private crudService: CrudService,
    private router : Router,
    private fb : FormBuilder,
  ) {}

  newBook = this.fb.group ({
    title: [''],
    author: [''],
    edition: ['']
  });

  poster(){

    this.book = this.newBook.value;

    this.crudService.postBooks(this.book).subscribe((data:Book) => {
      console.log(data);
      this.router.navigateByUrl('/')
    },
    (error:any) => {
      console.log(error)
    });

  }
}
