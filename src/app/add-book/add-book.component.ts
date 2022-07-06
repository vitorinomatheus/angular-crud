import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private crudService: CrudService){ this.getter() }

  bookTitle = '';
  bookAuthor = '';
  bookEdition = '';

  book = (title: string, author: string, edition: string) => {

    return { title, author, edition }
  }

  getter() {
    this.crudService.getBooks().subscribe((data:any) => {
      console.log(data)
    }, (error:any) => {
      console.log(error)
    })
  }

  poster(){
    let newBook = this.book(this.bookTitle, this.bookAuthor, this.bookEdition);
    console.log(newBook);

    this.crudService.postBooks(newBook).subscribe((data:any) => {
      console.log(data);
    },
    (error:any) => {
      console.log(error)
    });
  }
}
