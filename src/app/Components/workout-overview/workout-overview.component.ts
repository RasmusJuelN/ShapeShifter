import { Component } from '@angular/core';
import { Workout } from 'src/app/Models/Workout';
import { WorkoutService } from 'src/app/Services/workout.service';

@Component({
  selector: 'app-workout-overview',
  templateUrl: './workout-overview.component.html',
  styleUrls: ['./workout-overview.component.scss']
})
export class WorkoutOverviewComponent {

  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workoutService.getWorkouts().subscribe((workouts) => {
      this.workouts = workouts;
    });
  }
}
