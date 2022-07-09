import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private crudService: CrudService){}

  bookTitle = '';
  bookAuthor = '';
  bookEdition = '';

  book = (Atitle: string, Bauthor: string, Cedition: string) => {

    return { Atitle, Bauthor, Cedition }
  }

  poster(){
    let newBook = this.book(this.bookTitle, this.bookAuthor, this.bookEdition);


    this.crudService.postBooks(newBook).subscribe((data:any) => {
      console.log(data);
    },
    (error:any) => {
      console.log(error)
    });
  }
}
