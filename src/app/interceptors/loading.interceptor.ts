import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from '../service/loading.service';

/**
 * LoadingInterceptor
 *
 * Interceptor responsável por mostrar e esconder um indicador de loading durante as chamadas HTTP.
 *
 * @see HttpInterceptor
 */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  /**
   * Intercepta chamadas HTTP para iniciar e parar o loading.
   *
   * Quando uma chamada HTTP é feita, o loading é iniciado. Quando a chamada termina (com sucesso ou erro),
   * o loading é parado.
   *
   */
  constructor(private loadingService: LoadingService) { }

  /**
   * Intercepta chamadas HTTP para iniciar e parar o indicador de loading.
   * Quando uma chamada HTTP é feita, o indicador de loading é iniciado.
   * Quando a chamada termina (com sucesso ou erro), o indicador de loading é parado.
   *
   * @param req A requisição HTTP original.
   * @param next O próximo handler no pipeline de interceptação.
   * @returns Um observable do evento HTTP.
   */
  public intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    this.loadingService.startLoading();

    return next.handle(req).pipe(
      tap({
        next: (event: HttpEvent<T>) => {
          if (event instanceof HttpResponse) {
            this.loadingService.stopLoading();
          }
        },
        error: () => {
          this.loadingService.stopLoading();
        }
      })
    );
  }
}
