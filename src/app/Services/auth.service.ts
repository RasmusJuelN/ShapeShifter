import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:5020/api/Authentication/'
  private userPayload:any;

  constructor(private http:HttpClient) { 
    this.userPayload = this.decodedToken();
  }

  


  login(loginRequest:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginRequest)
  }


  // login(username: string, password: string): Observable<any> {
  //   const loginRequest = {
  //     username: username,
  //     password: password,
  //   };

  //   return this.http.post<any>(`${this.baseUrl}authenticate`, loginRequest);
  // }

  setToken(tokenValue:string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    // console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token);
  }


}
