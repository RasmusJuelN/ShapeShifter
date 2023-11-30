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

  constructor(private workoutService: WorkoutService, private user: UserService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userId = this.auth.getUserIdFromToken();

    console.log(this.userId)
    this.workoutService.getWorkouts(this.userId).subscribe((workouts) => {
      this.workouts = workouts;
    });
  }

  
    navigateToWorkout(workoutId: number): void {
    this.router.navigate(['/workout', workoutId]);
  }
}
