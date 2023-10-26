import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from 'src/app/interceptors/loading.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class LoadingModule { }
