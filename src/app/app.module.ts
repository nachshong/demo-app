import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { SimpleBindingComponent } from './simple-binding/simple-binding.component';
import { BooksComponent } from './books/books.component';
import { HelloServiceComponent } from './hello-service/hello-service.component';
import { PostsComponent } from './posts/posts.component';
import { PostsFilterPipe } from './posts/posts-filter.pipe';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { SanitizerComponent } from './sanitizer/sanitizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleBindingComponent,
    BooksComponent,
    HelloServiceComponent,
    PostsComponent,
    PostsFilterPipe,
    UserDetailsComponent,
    LoginComponent,
    AccountComponent,
    SanitizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: AuthService.getJWT,
        whitelistedDomains: ['localhost:3000', 'jsonplaceholder.typicode.com'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
