import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePageComponent } from './single-page.component';
import { SinglePageRoutingModule } from './single-page-routing.module';



@NgModule({
  declarations: [
    SinglePageComponent
  ],
  imports: [
    CommonModule,
    SinglePageRoutingModule
  ],
  exports: [
    SinglePageComponent
  ]
})
export class SinglePageModule { }
