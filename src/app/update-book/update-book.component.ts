import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{

  book:any;
  data:any;

  bookTitle = '';
  bookAuthor = '';
  bookEdition = '';

  constructor(private CrudService:CrudService, private route:ActivatedRoute, private router : Router){}

  ngOnInit(){

    this.book = this.route.snapshot.paramMap.get('book');
    this.CrudService.getSelectedBook(this.book).subscribe((data) => {

      this.data = data;

      this.bookTitle = this.data.Atitle;
      this.bookAuthor = this.data.Bauthor;
      this.bookEdition = this.data.Cedition;
    })

  }

  updateBook(){
    this.CrudService.updateBooks(this.book, this.data).subscribe((data) => {
      console.log(data)
      this.router.navigateByUrl('/')
    }, (error) => {
      console.log(error)
    })
  }
}
