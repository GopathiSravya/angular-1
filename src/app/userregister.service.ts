import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

    

  constructor(private http : HttpClient) { }

  learnObservable() : Observable<string>{

    return new Observable<string>( observer=>{
      console.log('observer eecuted');
      setTimeout(()=> observer.next('Neotereic'),6000)
    })
  }

  saveUser(user : any) : Observable<Object>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept' : 'application/json'
      })
    };
    console.log("form service method");
    return  this.http.post('http://localhost:8080/api/saveUser' ,user,httpOptions)

  }
}
