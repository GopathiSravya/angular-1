import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../account.service';
import { Address } from '../model/Address';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {

  constructor(private accountService: AccountService){

  }

  AccountNubmer: string = "test";
  account = new Account('','','',0,'',new Address('','','','',''));

  createAccount(){

    console.log(JSON.stringify(this.account))
    this.accountService.createAccount(this.account).subscribe(
      data =>{
        console.log(JSON.stringify(data));
        
        this.AccountNubmer = data.accountNumber;
      }
    )
  }

}
