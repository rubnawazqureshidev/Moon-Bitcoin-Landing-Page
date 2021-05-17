import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { TrustedbyComponent } from './trustedby/trustedby.component';
import { CryptocompareComponent } from './cryptocompare/cryptocompare.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FeaturesComponent } from './features/features.component';
import { CounterComponent } from './counter/counter.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { MobileappsComponent } from './mobileapps/mobileapps.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    TrustedbyComponent,
    FooterComponent,
    CryptocompareComponent,
    NewsletterComponent,
    FeaturesComponent,
    CounterComponent,
    SeperatorComponent,
    MobileappsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    TrustedbyComponent,
    FooterComponent,
    CryptocompareComponent,
    NewsletterComponent,
    FeaturesComponent,
    CounterComponent,
    SeperatorComponent,
    MobileappsComponent 
  ],
})
export class ComponentsModule { }
