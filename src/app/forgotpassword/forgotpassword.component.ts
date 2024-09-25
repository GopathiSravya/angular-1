
import { Component } from '@angular/core';
import {UserregisterService} from '../userregister.service'
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {

  constructor(private UserRegisterService: UserregisterService,){
  }

  userDetails={

    name: '',
    email:'',
    address:'',
    mobile:'',
    age:'',
    gender:''


  };
  register(form:any): void{


    var response= this.UserRegisterService.saveUser(this.userDetails)
    response.subscribe(response=>{
      console.log("From Subscriber of observable"+JSON.stringify(response))

    },error  => {
      console.log(" saved error "+JSON.stringify(error));
    });



    console.log("registration is inprogress"+JSON.stringify(this.userDetails));
  }

}