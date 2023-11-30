import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../Environment/Environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.apiUrl + "User/";
  private id$ = new BehaviorSubject<number>(0);
  constructor(private http:HttpClient) { }

  signup(signupRequest:any){
    return this.http.post<any>(`${this.baseUrl}register`,signupRequest)
  }

  public getUserId(){
    return this.id$.asObservable();
  }

  public setUserId(id: any){
    this.id$.next(id);
  }
}
