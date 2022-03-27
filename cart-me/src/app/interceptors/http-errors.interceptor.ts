import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertsService } from '../services/Alerts/alerts.service';

@Injectable({
  providedIn: 'root'
})

export class HttpErrorsInterceptor implements HttpInterceptor {

  constructor(private alertify: AlertsService,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //error handling
    return next.handle(request).pipe(catchError((errr:HttpErrorResponse)=>{
      const errorMessage = this.setError(errr)
      this.alertify.error(errorMessage)
      return throwError(errorMessage)
    }));
  }

  setError(error:HttpErrorResponse):string{
   let errMessage = 'Unknown Error Occured'

   if (error.error instanceof ErrorEvent) {
     //client errors
     errMessage = error.error.message
   }
   else{
     //server errors
     if (error.status !== 0) {
        errMessage = error.error.errMessage
     }
   }
   return errMessage
  }
}
