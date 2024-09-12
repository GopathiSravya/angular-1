import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmLoginService {

  private loginUrl = 'http://localohost:8080/api/login'; 

  constructor(private http: HttpClient) {}

  login(accountNumber: string, pin: string): Observable<any> {
    const httpheders ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept' : 'application/json'
      })
    };
    return this.http.post(this.loginUrl, {
      accountNumber: accountNumber,
      pin: pin,httpheders
    });
  }
}
