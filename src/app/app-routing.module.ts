import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ContactComponent } from './components/contact/contact.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { GradComponent } from './components/grad/grad.component';
import { UndergradComponent } from './components/undergrad/undergrad.component';
import { OtherOpportunitiesComponent } from './other-opportunities/other-opportunities.component'

const routes: Routes = [
  { path: '', component: GeneralInfoComponent},
  { path: 'grad', component: GradComponent },
  { path: 'undergrad', component: UndergradComponent },
  { path: 'confirmation', component: ConfirmationComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'general', component: GeneralInfoComponent},
  { path: 'others', component: OtherOpportunitiesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
