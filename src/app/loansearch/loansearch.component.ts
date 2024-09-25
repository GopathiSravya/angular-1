import { Component } from '@angular/core';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {
  accountnumber:string='one way binding';
  searchAccount(){
    console.log("input account number"+this.accountnumber);
  }
}
