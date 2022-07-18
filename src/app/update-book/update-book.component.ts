import { Book } from './../services/bookStruct.model';
import { FormBuilder } from '@angular/forms';
import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{

  bookId!:number;
  book!:Book;

  updatedBook = this.fb.group ({
    id: this.bookId,
    title: [''],
    author: [''],
    edition: [''],
  });

  constructor(
    private CrudService:CrudService,
    private route:ActivatedRoute,
    private router : Router,
    private fb : FormBuilder
  ){}

  ngOnInit(){

    this.bookId = parseInt(this.route.snapshot.paramMap.get('book')!);
    this.CrudService.getSelectedBook(this.bookId).subscribe((data) => {

      this.book = data;

      this.updatedBook.controls['title'].setValue(this.book.title!);
      this.updatedBook.controls['author'].setValue(this.book.author!);
      this.updatedBook.controls['edition'].setValue(this.book.edition!);
      this.updatedBook.controls['id'].setValue(this.book.id!);
    })

  }

  updateBook(){

    this.book = this.updatedBook.value;

    this.CrudService.updateBooks(this.book).subscribe((data) => {

      console.log(data)
      this.router.navigateByUrl('/')

    }, (error) => {

      console.log(error)
    })
  }
}
