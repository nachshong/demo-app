import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                retry(1),
                catchError((response: HttpErrorResponse) => {
                    var errorMessage: string;

                    if (response.error instanceof ErrorEvent) {
                        // client side error
                        errorMessage = `Error: ${response.error.message}`;
                    } else {
                        // server side error
                        errorMessage = `Error Code: ${response.status}\nMessage: ${response.message}`;
                    }

                    // log the error
                    console.error(`HTTP_ERROR: ${errorMessage}`);

                    return throwError(response);
                })
            );
    }
}
// https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192
