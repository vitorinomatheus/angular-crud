import { Book } from './../services/bookStruct.model';
import { CrudService } from './../services/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor(private CrudService : CrudService) { this.getter() }

  booksList: Array<any> = [];

  getter() {
    this.CrudService.getBooks().subscribe((data:Array<any>) => {

      this.booksList = data;

    }, (error:any) => {

      console.log(error)
    })
  }

  delete(book : Book){
    this.CrudService.deleteBooks(book).subscribe((data:any) => {

        console.log(data);
        this.getter();
    }, (error:any) => {

      console.log(error)
    })
  }
}
