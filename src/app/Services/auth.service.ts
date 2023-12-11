import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../Environment/Environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.apiUrl + "Authentication/";
  private jwtHelper = new JwtHelperService();
  private userPayload: any;

  private userRoleSubject = new BehaviorSubject<string | null>(null);
    userRole$ = this.userRoleSubject.asObservable();

  constructor(private http: HttpClient) {
    this.updateUserPayload();
  }

  login(loginRequest: any) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginRequest);
  }

  setToken(tokenValue: string) : void{
    localStorage.setItem('token', tokenValue);
    this.updateUserPayload();
    this.userRoleSubject.next(this.getUserRoleFromToken());
  }

  isLoggedin():boolean{
    // !! converts string to boolean value - if there is a token, return true
    return !!localStorage.getItem('token')
  }
  
  getToken() : any {
    return localStorage.getItem('token');
  }

  removeToken() : void{
    localStorage.removeItem('token');
    this.updateUserPayload();
  }

  decodedToken() : any{
    const token = this.getToken();
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
    return null;
  }

  getUserIdFromToken() : any {
    return this.userPayload?.id;
  }

  getUserRoleFromToken() : string {
    return this.userPayload?.role;
  }

  private updateUserPayload() : void {
    this.userPayload = this.decodedToken();
  }
}
