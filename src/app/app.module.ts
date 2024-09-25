import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { OtpComponent } from './otp/otp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MaskDirective } from './mask.directive';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RatingComponent } from './rating/rating.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AtmloginComponent } from './atmlogin/atmlogin.component';
import { HomeComponent } from './home/home.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    OtpComponent,
    ForgotpasswordComponent,
    MaskDirective,
    AddressComponent,
    UserComponent,
    RestaurantComponent,
    RatingComponent,
    CreateaccountComponent,
    AtmloginComponent,
    HomeComponent,
    LoansearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
