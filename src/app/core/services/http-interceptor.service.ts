import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import Swal from 'sweetalert2'

import { LoadingService } from '../../services/loading.service';

@Injectable({
    providedIn: 'root'
  })
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(
        private loading: LoadingService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loading.setLoading(true);
        return next.handle(request)
            .pipe(catchError((error: HttpErrorResponse) => {
                Swal.fire({
                    title: 'Atenção',
                    text: 'Ocorreu um erro de comunicação, recarrege a página e tente novamente, se o erro persistir entre em contato.',
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
                return throwError(error);
            }))
            .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
                if (evt instanceof HttpResponse) {
                    this.loading.setLoading(false);
                }
                return evt;
            }));
    }
}