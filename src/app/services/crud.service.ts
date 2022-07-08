import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'https://crud-angular-71d0b-default-rtdb.firebaseio.com/book.json';

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<any>{
    return this.http.get(this.url)
  }

  public postBooks(book : Object): Observable<any>{
    return this.http.post(this.url, book)
  }
}
