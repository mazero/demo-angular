import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookListComponent } from './book-list/book-list.component';
import { JokeComponent } from './joke/joke.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'jokes', component: JokeListComponent},
  {path: 'books', component: BookListComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
