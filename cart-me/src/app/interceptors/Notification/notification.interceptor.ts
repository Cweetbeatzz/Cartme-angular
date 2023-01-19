import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {

  constructor(private sweetAlert: SweetalertService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
