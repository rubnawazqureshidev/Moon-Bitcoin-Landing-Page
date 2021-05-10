import { AboutUsComponent } from './about-us.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsComponent,
        resolve: {
        }
      },
    ]),
  ]
})
export class AboutUsModule { }
