import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppErrorHandler } from './app-error-handler';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { AuthService } from './auth/auth.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthBarComponent } from './auth-bar/auth-bar.component';
import { HomeComponent } from './home/home.component';
import { SimpleBindingComponent } from './simple-binding/simple-binding.component';
import { BooksComponent } from './books/books.component';
import { HelloServiceComponent } from './hello-service/hello-service.component';
import { PostsComponent } from './posts/posts.component';
import { PostsMdComponent } from './posts/posts-md.component';
import { PostsFilterPipe } from './posts/posts-filter.pipe';
import { CountPipe } from './common/count.pipe';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { SanitizerComponent } from './sanitizer/sanitizer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthBarComponent,
    HomeComponent,
    SimpleBindingComponent,
    BooksComponent,
    HelloServiceComponent,
    PostsComponent,
    PostsMdComponent,
    PostsFilterPipe,
    CountPipe,
    UserDetailsComponent,
    LoginComponent,
    AccountComponent,
    SanitizerComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: AuthService.getJWT,
        whitelistedDomains: ['localhost:3000', 'jsonplaceholder.typicode.com'],
        blacklistedRoutes: []
      }
    }),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
