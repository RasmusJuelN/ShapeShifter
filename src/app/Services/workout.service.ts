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

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseUrl}/workouts`);
  }

  getWorkoutById(id: number): Observable<Workout> {
    return this.http.get<Workout>(`${this.baseUrl}/workouts/${id}`);
  }
}
