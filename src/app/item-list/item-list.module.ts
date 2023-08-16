import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { ItemListRoutingModule } from './item-list-routing.module';

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ItemListRoutingModule
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemListModule { }
