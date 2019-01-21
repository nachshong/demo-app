import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
    handleError(error: any) {
        
        super.handleError(error); // console.error

        // log error
        // windows.alert(error);
    }
}
