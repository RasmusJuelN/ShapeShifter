import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../Models/Workout';
import { environment } from '../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  baseUrl = environment.apiUrl + "workout/"
  constructor(private http: HttpClient) {}

  getWorkouts(userId: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}GetWorkouts/${userId}`);
  }

  getWorkoutById(workoutId:number): Observable<Workout> {
    return this.http.get<Workout>(`${this.baseUrl}${workoutId}`);
  }

  createWorkout(userId: number, workout: Workout): Observable<Workout> {
  
    return this.http.post<Workout>(`${this.baseUrl}${userId}`, workout);
}
}
