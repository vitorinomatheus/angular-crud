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

  bookId:any;
  data:any;

  updatedBook = this.fb.group ({
    Atitle: [''],
    Bauthor: [''],
    Cedition: ['']
  });

  constructor(
    private CrudService:CrudService, 
    private route:ActivatedRoute, 
    private router : Router,
    private fb : FormBuilder
  ){}

  ngOnInit(){

    this.bookId = this.route.snapshot.paramMap.get('book');
    this.CrudService.getSelectedBook(this.bookId).subscribe((data) => {

      this.data = data;

      this.updatedBook.controls['Atitle'].setValue(this.data.Atitle);
      this.updatedBook.controls['Bauthor'].setValue(this.data.Bauthor);
      this.updatedBook.controls['Cedition'].setValue(this.data.Cedition);
    })

  }

  updateBook(){

    this.data = this.updatedBook.value;

    this.CrudService.updateBooks(this.bookId, this.data).subscribe((data) => {

      console.log(data)
      this.router.navigateByUrl('/')

    }, (error) => {

      console.log(error)
    })
  }
}
