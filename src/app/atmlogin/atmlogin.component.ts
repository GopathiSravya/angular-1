import { Component } from '@angular/core';
import { AtmLoginService } from '../atm-login.service';

@Component({
  selector: 'app-atmlogin',
  templateUrl: './atmlogin.component.html',
  styleUrl: './atmlogin.component.css'
})
export class AtmloginComponent {
  accountNumber: string = '';
  pin: string = '';
  errorMessage: string = '';

  constructor(private atmLoginService: AtmLoginService) {}

  onSubmit() {
    // Call the login method from AtmLoginService
    this.atmLoginService.login(this.accountNumber, this.pin).subscribe(
      (response) => {
        // Handle successful response
        console.log('Login successful', response);
        this.errorMessage = '';
      },
      (error) => {
        // Handle error response
        console.error('Login failed', error);
        this.errorMessage = 'Invalid account number or PIN. Please try again.';
      }
    );
  }

}
