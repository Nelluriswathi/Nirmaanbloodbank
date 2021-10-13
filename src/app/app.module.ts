import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DonarregistrationComponent } from './donarregistration/donarregistration.component';
import { DonarsearchComponent } from './donarsearch/donarsearch.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InfoComponent } from './aboutus/info/info.component';
import { GalaryComponent } from './aboutus/galary/galary.component';
import { ContactComponent } from './aboutus/contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';
import { DonarslistComponent } from './donarslist/donarslist.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DonarregistrationComponent,
    DonarsearchComponent,
    AboutusComponent,
    InfoComponent,
    GalaryComponent,
    ContactComponent,
    PagenotfoundComponent,
    FooterComponent,
    HelpComponent,
    DonarslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
