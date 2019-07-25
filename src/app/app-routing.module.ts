import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard'
import { HomeComponent } from './home/home.component';
import { SimpleBindingComponent } from './simple-binding/simple-binding.component';
import { BooksComponent } from './books/books.component';
import { HelloServiceComponent } from './hello-service/hello-service.component';
import { PostsComponent } from './posts/posts.component';
import { PostsMdComponent } from './posts/posts-md.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { AccountComponent } from './account/account.component';
import { SanitizerComponent } from './sanitizer/sanitizer.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simple-binding', component: SimpleBindingComponent },
  { path: 'books', component: BooksComponent },
  { path: 'hello-service', component: HelloServiceComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/md', component: PostsMdComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'sanitizer', component: SanitizerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
