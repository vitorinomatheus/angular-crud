import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<any>{
    return this.http.get('https://crud-angular-71d0b-default-rtdb.firebaseio.com/books.json')
  }

  public postBooks(book : Object): Observable<any>{
    return this.http.post('https://crud-angular-71d0b-default-rtdb.firebaseio.com/books.json', book)
  }
}
