import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './views/components/navbar/navbar.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { ContactComponent } from './views/home/contact/contact.component';
import { ShopComponent } from './views/services/shop/shop.component';
import { PrivacyPolicyComponent } from './views/home/privacy-policy/privacy-policy.component';
import { RefundReturnPolicyComponent } from './views/home/refund-return-policy/refund-return-policy.component';
import { OurProjectsComponent } from './views/research/our-projects/our-projects.component';
import { ServicesComponent } from './views/services/services/services.component';
import { ResearchComponent } from './views/research/research/research.component';
import { PrototypesComponent } from './views/services/prototypes/prototypes.component';
import { IEmailService } from './services/email/email.service.interface';
import { EmailService } from './services/email/email.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ShopComponent,
    PrivacyPolicyComponent,
    RefundReturnPolicyComponent,
    OurProjectsComponent,
    ServicesComponent,
    ResearchComponent,
    PrototypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: IEmailService, useClass: EmailService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
