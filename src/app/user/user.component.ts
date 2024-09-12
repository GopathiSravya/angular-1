import { Component, EventEmitter, Output } from '@angular/core';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output()
  userNameEmitter : EventEmitter<string> = new EventEmitter();


  constructor(private userRegistration: UserregisterService){

  }

  fullNameFromChild : string ='';

  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  }

  submitForm(form: any): void {

    var abc= this.userRegistration.learnObservable().subscribe(
      data =>{
        console.log('from custom learnObservable subscription ');
        
      }
    )
   
    var response = this.userRegistration.saveUser(this.userDetails);

      response.subscribe(response => {
        console.log("from subcribe of observable "+ JSON.stringify(response));
      }, error => {
        console.log(" from subcribe of observable Error ");
      });

      console.log("refistration in process" + JSON.stringify(this.userDetails)+"Response "+ response);

    
      }

}
