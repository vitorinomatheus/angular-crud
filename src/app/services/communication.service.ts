import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private selectedBookSource = new Subject<string>();
  
  selectedBook$ = this.selectedBookSource.asObservable();

  selectBook(book : string) {
    this.selectedBookSource.next(book)
  }
}
