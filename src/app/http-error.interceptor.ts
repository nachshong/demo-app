import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    var errorMessage = '';

                    if (error.error instanceof ErrorEvent) {
                        // client side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }

                    // log the error
                    //window.alert(errorMessage);

                    return throwError(error);
                })
            );
    }
}
// https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192
