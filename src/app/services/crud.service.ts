import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './bookStruct.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'https://localhost:7271/v1/books';

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.url)
  }

  public postBooks(book : Book): Observable<Book>{
    return this.http.post(`${this.url}`, book)
  }

  public deleteBooks(book : Book): Observable<Book>{
    return this.http.delete(`${this.url}/${book.id}`)
  }

  public updateBooks(book : Book): Observable<Book>{
    return this.http.put(`${this.url}/${book.id}`, book)
  }

  public getSelectedBook(book: Number): Observable<Book>{
    return this.http.get(`${this.url}/${book}`)
  }
}
