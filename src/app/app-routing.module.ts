import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './aboutus/contact/contact.component';
import { GalaryComponent } from './aboutus/galary/galary.component';
import { InfoComponent } from './aboutus/info/info.component';
import { DonarregistrationComponent } from './donarregistration/donarregistration.component';
import { DonarsearchComponent } from './donarsearch/donarsearch.component';
import { DonarslistComponent } from './donarslist/donarslist.component';
import { HelpComponent } from './help/help.component';
import { OverviewComponent } from './overview/overview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'overview',component:OverviewComponent},
  {path:'donarregistration',component:DonarregistrationComponent},
  {path:'donarsearch',component:DonarsearchComponent},
  {path:'aboutus',component:AboutusComponent,children:[
    {path:'info',component:InfoComponent},
    {path:'galary',component:GalaryComponent},
    {path:'contact',component:ContactComponent}
  ]},
  {path:'help',component:HelpComponent},
  {path:'donarslist',component:DonarslistComponent},
  {path:'',redirectTo:'overview',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
