import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  /**
   * Inicia o processo de loading
   */
  public startLoading(): void {
    this.isLoadingSubject.next(true);
  }

  /**
   * Finaliza o processo de loading
   */
  public stopLoading(): void {
    this.isLoadingSubject.next(false);
  }
}
