import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private alertify: AlertsService, public router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')
    if (token) {

      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    else {
      this.alertify.error('Invalid Credientials you are Unauthorized😑🤨')
      this.router.navigate(['/login'])
    }
    return next.handle(request);
  }
}
