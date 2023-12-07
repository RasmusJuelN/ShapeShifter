import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from 'src/app/Models/Workout';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { WorkoutService } from 'src/app/Services/workout.service';

@Component({
  selector: 'app-workout-overview',
  templateUrl: './workout-overview.component.html',
  styleUrls: ['./workout-overview.component.scss']
})
export class WorkoutOverviewComponent {

  workouts: Workout[] = [];
  userId: number = 0;

  sortingOptions: { value: string, label: string }[] = [
    { value: 'date-desc', label: 'Newest' },
    { value: 'date-asc', label: 'Oldest' },
    { value: 'name-asc', label: 'A-Z' },
    { value: 'name-desc', label: 'Z-A' },
  ];
  selectedSortingOption: string = 'date-desc'; //default: newest to oldest

  constructor(private workoutService: WorkoutService, private user: UserService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userId = this.auth.getUserIdFromToken();

    console.log(this.userId)
    this.workoutService.getWorkouts(this.userId).subscribe((workouts) => {
      this.workouts = workouts;
      this.sortWorkouts();
    });
  }

  toggleSortingOrder(): void {
    this.sortWorkouts();
  }

  sortWorkouts(): void {
    this.workouts.sort((a, b) => {
      const dateA = new Date(a.workoutDate).getTime();
      const dateB = new Date(b.workoutDate).getTime();
      const nameA = (a.workoutName ?? '').toLowerCase();
      const nameB = (b.workoutName ?? '').toLowerCase();
  
      if (this.selectedSortingOption === 'date-desc') {
        return dateB - dateA;
      } else if (this.selectedSortingOption === 'date-asc') {
        return dateA - dateB;
      } else if (this.selectedSortingOption === 'name-asc') {
        return nameA.localeCompare(nameB);
      } else if (this.selectedSortingOption === 'name-desc') {
        return nameB.localeCompare(nameA);
      }
  
      // Default sorting: descending order
      return dateB - dateA;
    });
  }

  
    navigateToWorkout(workoutId: number): void {
    this.router.navigate(['/workout', workoutId]);
  }
}
