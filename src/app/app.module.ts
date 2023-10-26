import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingModule } from './components/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
