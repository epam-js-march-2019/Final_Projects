import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {RegistrationComponent} from "./registration/registration.component";
import {AuthGuard} from "./app-services/auth.guard";
import {ServicesComponent} from "./services/services.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {BookingFormComponent} from "./booking-form/booking-form.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'order', component: BookingFormComponent, canActivate: [AuthGuard]},
  {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
