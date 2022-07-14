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

  delete(book : String){
    this.CrudService.deleteBooks(book).subscribe((data:Array<any>) => {

        console.log(data);
        this.getter();
    }, (error:any) => {
      
      console.log(error)
    })
  }
}
