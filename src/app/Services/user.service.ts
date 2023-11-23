import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:5020/api/User/'
  constructor(private http:HttpClient) { }

  signup(signupRequest:any){
    return this.http.post<any>(`${this.baseUrl}register`,signupRequest)
  }
}
