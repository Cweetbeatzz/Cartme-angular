import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TimerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let startTime = (new Date()).getTime();

    //var newReq = req.clone({ headers: req.headers.set('startTime', startTime.toString()) });

    return next.handle(request).pipe(
      map(
        (event) => {
          if (event instanceof HttpResponse) {
            var endTime = (new Date()).getTime();
            event = event.clone({ headers: event.headers.set('endTime', endTime.toString()) });
            event = event.clone({ headers: event.headers.set('startTime', startTime.toString()) });
            var diff = endTime - startTime;

            console.log(event.url + " succeded in " + diff + " milli seconds");
          }
          return event;
        }), tap(event => { },
          error => {
            if (error instanceof HttpErrorResponse) {
              var endTime = (new Date()).getTime();
              var diff = endTime - startTime;

              console.log(error.url + " failed in " + diff + " milli seconds");
            }
          }
        )
    )
      ;
  }
}
