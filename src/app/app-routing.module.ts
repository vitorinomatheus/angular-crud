import { UpdateBookComponent } from './update-book/update-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'addbook',
    component: AddBookComponent
  },
  {
    path: 'update/:book',
    component: UpdateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
