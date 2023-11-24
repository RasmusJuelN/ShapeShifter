import { Injectable } from '@angular/core';
import { environment } from '../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  baseUrl: string = environment.apiUrl + "Exercise/"
  constructor() { }
}
