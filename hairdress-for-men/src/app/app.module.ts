import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {RegistrationComponent} from './registration/registration.component';
import {AlertComponent} from './alert/alert.component';
import {LinkComponent} from './link/link.component';
import {FormsModule} from "@angular/forms";
import {ServiceComponent} from './service/service.component';
import {ServicesComponent} from './services/services.component';
import {ContactsComponent} from './contacts/contacts.component';
import {BookingFormComponent} from './booking-form/booking-form.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {MasterComponent} from './master/master.component';
import {OrderComponent} from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    RegistrationComponent,
    AlertComponent,
    LinkComponent,
    ServiceComponent,
    ServicesComponent,
    ContactsComponent,
    BookingFormComponent,
    MyOrdersComponent,
    MasterComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
