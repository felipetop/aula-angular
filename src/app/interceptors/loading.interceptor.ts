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
   * @template T - O tipo do corpo da requisição/response.
   * @param {HttpRequest<T>} req - A requisição HTTP original.
   * @param {HttpHandler} next - O próximo handler no pipeline de interceptação.
   * @returns {Observable<HttpEvent<T>>} - Um observable do evento HTTP.
   */
  constructor(private loadingService: LoadingService) { }

  /**
   * Inteceptador de chamadas http destinada para iniciar loading
   * Quando faz uma chamada http começa um loading, quando termina a chamada o loading para
   * @param req
   * @param next
   * @returns
   */
  public intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    this.loadingService.startLoading();

    return next.handle(req).pipe(
      tap((event: HttpEvent<T>) => {
        if (event instanceof HttpResponse) {
          this.loadingService.stopLoading();
        }
      }, () => {
        this.loadingService.stopLoading();
      })
    );
  }
}
