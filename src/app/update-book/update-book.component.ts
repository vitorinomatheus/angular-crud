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

  book!:Book;

  updatedBookFormGroup = this.fb.group ({
    id: 0,
    title: [''],
    author: [''],
    edition: [''],
  });

  constructor(
    private CrudService:CrudService,
    private route:ActivatedRoute,
    private router : Router,
    private fb : FormBuilder
  ){ this.getBook()}

  ngOnInit(){

    this.updatedBookFormGroup.valueChanges.subscribe(value => {
      this.book = value;
    })

  }

  getBook(){

    let selectedBook : Book = {
      id: 0,
    };

    selectedBook.id = parseInt(this.route.snapshot.paramMap.get('book')!);
    this.CrudService.getSelectedBook(selectedBook).subscribe((data) => {

      this.updatedBookFormGroup.setValue(data);

    })

  }

  updateBook(){

    this.CrudService.updateBooks(this.book).subscribe((data) => {

      console.log(data)
      this.router.navigateByUrl('/')

    }, (error) => {

      console.log(error)

    })
  }
}
