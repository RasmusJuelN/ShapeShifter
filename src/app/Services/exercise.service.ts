import { Injectable } from '@angular/core';
import { environment } from '../Environment/Environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  baseUrl: string = environment.apiUrl + "Exercise/"
  constructor(private http: HttpClient) { }

  
}
