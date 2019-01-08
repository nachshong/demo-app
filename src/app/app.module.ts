import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BooksComponent } from './books/books.component';
import { SimpleBindingComponent } from './simple-binding/simple-binding.component';
import { HelloServiceComponent } from './hello-service/hello-service.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostsFilterPipe } from './posts/posts-filter.pipe';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BooksComponent,
    SimpleBindingComponent,
    HelloServiceComponent,
    HomeComponent,
    PostsComponent,
    PostsFilterPipe,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
