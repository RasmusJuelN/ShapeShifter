import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { WorkoutService } from 'src/app/Services/workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss']
})
export class AddWorkoutComponent {
  workoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private workoutService: WorkoutService, private auth: AuthService, private router: Router) {
      this.workoutForm = this.formBuilder.group({
          workoutName: ['', Validators.required],
          workoutDate: [new Date()],
          exercises: this.formBuilder.array([
              this.initExercise(),
          ])
      });
  }

  initExercise() {
      return this.formBuilder.group({
          exerciseName: ['', Validators.required],
          weight: [0, Validators.required],
          reps: [0, Validators.required],
          sets: [0, Validators.required],
      });
  }

  addExercise() {
    if(this.workoutForm.valid) {
      const exercises = this.workoutForm.get('exercises') as any;
      exercises.push(this.initExercise());
    }
    else{
      alert('fields required');
    }
  }

  get exercises() {
    return this.workoutForm.get('exercises') as any;
}

  removeExercise(index: number) {
      const exercises = this.workoutForm.get('exercises') as any;
      exercises.removeAt(index);
  }

  createWorkout() {
    

      if (this.workoutForm.valid) {
        console.log(this.workoutForm.value)
          this.workoutService.createWorkout(this.auth.getUserIdFromToken(), this.workoutForm.value).subscribe(response => {
              // Handle the response as needed
              console.log('Workout created:', response);
              // Optionally reset the form or perform other actions
              this.workoutForm.reset();
              alert('Workout created');
              this.router.navigate(['/main']);
              
          });
      }
      else{
        alert('fields required');
      };
  }
}