import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.apiUrl + "User/";
  constructor(private http:HttpClient) { }

  signup(signupRequest:any){
    return this.http.post<any>(`${this.baseUrl}register`,signupRequest)
  }
}
