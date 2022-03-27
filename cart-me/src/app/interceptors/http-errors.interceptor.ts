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
    return next.handle(request).pipe(catchError((errr:HttpErrorResponse)=>{
      this.alertify.error(errr.message)
      return throwError(errr.error)
    }));
  }
}
