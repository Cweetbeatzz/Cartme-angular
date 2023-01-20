import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {

  constructor(private alertify: AlertsService, public router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('User not an Admin')
    this.alertify.error('You are not an Admin')
    return next.handle(request);
  }
}
