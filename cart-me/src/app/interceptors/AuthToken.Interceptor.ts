import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppState } from '../Ngrx/store/app.state';
import { Store } from '@ngrx/store';
import { exhaustMap } from 'rxjs/operators';
import { getToken } from '../Ngrx/selectors/auth.selector';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

 constructor(private store:Store<AppState>){}

 //##############################

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return this.store.select(getToken).pipe(exhaustMap((token)=>{
   if (!token) {
    return next.handle(req)
   }

   let modified = req.clone({
    params:req.params.append('auth',token)
   })
   
   return next.handle(modified)

  }));
 }
}