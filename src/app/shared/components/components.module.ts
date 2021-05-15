import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { TrustedbyComponent } from './trustedby/trustedby.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    TrustedbyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    TrustedbyComponent,
    FooterComponent
  ],
})
export class ComponentsModule { }
