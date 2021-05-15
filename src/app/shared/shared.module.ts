import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@shared/components';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule,
  ]
})
export class SharedModule { }
