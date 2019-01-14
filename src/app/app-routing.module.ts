import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SimpleBindingComponent } from './simple-binding/simple-binding.component';
import { BooksComponent } from './books/books.component';
import { HelloServiceComponent } from './hello-service/hello-service.component';
import { PostsComponent } from './posts/posts.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { SanitizerComponent } from './sanitizer/sanitizer.component';
import { AuthGuardService } from './auth/auth-guard.service'
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simple-binding', component: SimpleBindingComponent },
  { path: 'books', component: BooksComponent },
  { path: 'hello-service', component: HelloServiceComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService] },
  { path: 'sanitizer', component: SanitizerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
