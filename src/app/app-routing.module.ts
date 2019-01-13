import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { BooksComponent } from './books/books.component';
import { SimpleBindingComponent } from './simple-binding/simple-binding.component';
import { HelloServiceComponent } from './hello-service/hello-service.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'books', component: BooksComponent },
  { path: 'simple-binding', component: SimpleBindingComponent },
  { path: 'hello-service', component: HelloServiceComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
