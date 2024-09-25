import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AtmLoginService } from './atm-login.service';
import { AtmloginComponent } from './atmlogin/atmlogin.component';
import { HomeComponent } from './home/home.component';
import { LoansearchComponent } from './loansearch/loansearch.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
   // Wildcard route
   { path: " ", component: TemplateDrivenComponentComponent},
   {path: 'forgotPassword', component: ForgotpasswordComponent},
   {path : 'addrestaurant', component: RestaurantComponent},
   {path: 'createaccount', component: CreateaccountComponent},
   {path:'login' , component: AtmloginComponent},
   {path:'searchaccount',component:LoansearchComponent},
   {path:'home', component: HomeComponent},
   {path:'address',component:AddressComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
