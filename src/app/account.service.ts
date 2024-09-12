import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private http: HttpClient) { }

  

  createAccount(account : any) : Observable<any>{
    const httpheders ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept' : 'application/json'
      })
    };
    console.log("form service method");
    return  this.http.post('http://localhost:8080/createAccount' ,account,httpheders)

  }

  

  


}
