import { Injectable } from '@angular/core';
import { environment } from '../Environment/Environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../Models/Exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  baseUrl: string = environment.apiUrl + "Exercise"
  constructor(private http: HttpClient) { }

  updateExercise(exerciseId: number, exercise: Exercise): Observable<Exercise> {
    return this.http.put<Exercise>(`${this.baseUrl}/${exerciseId}`, exercise);
  }

  deleteExercise(exerciseId: number): Observable<Exercise>{
    return this.http.delete<Exercise>(`${this.baseUrl}/${exerciseId}`);
  }

  createExercise(workoutId: number, exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(`${this.baseUrl}/${workoutId}`, exercise);
}
}
