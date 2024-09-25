import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../account.service';
import { Address } from '../model/Address';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
custaddress: AddressComponent | undefined;
  constructor(private accountService: AccountService){

  }

  AccountNumber:string="test";
  account = new Account('','','',0,'',new Address('','','','',''));

  createAccount(custaddress:AddressComponent){

    console.log(JSON.stringify(this.account))
    this.accountService.createAccount(this.account).subscribe(
      data =>{
        console.log(JSON.stringify(data));
        
        this.AccountNumber = data.accountNumber;
      }
    )
  }

}
