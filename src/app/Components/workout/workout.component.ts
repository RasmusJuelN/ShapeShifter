import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from 'src/app/Models/Exercise';
import { Workout } from 'src/app/Models/Workout';
import { WorkoutService } from 'src/app/Services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent {
  workout: Workout | any;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.loadWorkout();
  }

  loadWorkout(): void {
    const workoutId = this.route.snapshot.params['id'];
    this.workoutService.getWorkoutById(workoutId).subscribe((workout) => {
      this.workout = workout;
    });
  }

  
}
