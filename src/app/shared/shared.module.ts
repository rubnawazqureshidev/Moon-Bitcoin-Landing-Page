import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components';


@NgModule({
  declarations: [ 
     
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class SharedModule { }
