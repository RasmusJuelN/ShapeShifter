import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../Environment/Environment';
import { Observable } from 'rxjs';
import { BMITrackerEntry } from '../Models/BMITrackerEntry';

@Injectable({
  providedIn: 'root'
})
export class BmiTrackerService {
  baseUrl: string = environment.apiUrl + "BMITracker"
  constructor(private http: HttpClient) { }

  getEntries(userId: number): Observable<BMITrackerEntry[]> {
    return this.http.get<BMITrackerEntry[]>(`${this.baseUrl}/${userId}`);
  }

  addEntry(entry: BMITrackerEntry): Observable<BMITrackerEntry> {
    return this.http.post<BMITrackerEntry>(`${this.baseUrl}`, entry);
  }
}
