import { CrudService } from './../services/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(private CrudService : CrudService) { }

  
  bookTitle = '';
  bookAuthor = '';
  bookEdition = '';

}
