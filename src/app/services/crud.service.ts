import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'https://crud-angular-71d0b-default-rtdb.firebaseio.com/book';

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<any>{
    return this.http.get(`${this.url}.json`)
  }

  public postBooks(book : Object): Observable<any>{
    return this.http.post(`${this.url}.json`, book)
  }

  public deleteBooks(book : String): Observable<any>{
    return this.http.delete(`${this.url}/${book}.json`)
  }

  public updateBooks(book: String, info : Object): Observable<any>{
    return this.http.patch(`${this.url}/${book}.json`, info)
  }

  public getSelectedBook(book: string): Observable<any>{
    return this.http.get(`${this.url}/${book}.json`)
  }
}
