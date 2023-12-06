import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Models/Exercise';
import { Workout } from 'src/app/Models/Workout';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { WorkoutService } from 'src/app/Services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent {
  workout: Workout | any;
  exerciseForm: FormGroup;
  addExerciseForm: FormGroup;
  showAddExerciseForm: boolean = false;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService, private router: Router, private exercise: ExerciseService, private fb: FormBuilder) {
    this.exerciseForm = this.fb.group({
      exerciseName: ['', Validators.required],
      weight: [0, Validators.required],
      reps: [0, Validators.required],
      sets: [0, Validators.required],
  });

  this.addExerciseForm = this.fb.group({
    exerciseName: ['', Validators.required],
    weight: [0, Validators.min(0)],
    reps: [0, Validators.min(0)],
    sets: [0, Validators.min(0)],
  });
  }

  ngOnInit(): void {
    this.loadWorkout();
  }

  loadWorkout(): void {
    const workoutId = this.route.snapshot.params['id'];
    this.workoutService.getWorkoutById(workoutId).subscribe((workout) => {
      this.workout = workout;
    });
  }

  deleteWorkout(workoutId: number, workoutName: string | undefined): void {
    if(confirm(`Delete workout: ${workoutName}?`))
        this.workoutService.deleteWorkout(workoutId).subscribe(() => {
                alert('workout was deleted');
                this.router.navigate(['main']);
            },
            (err) => {
                console.error(err.error.message);             
            }
        );
    }

    toggleEditMode(exercise: Exercise): void {
      
      exercise.editMode = !exercise.editMode;
      this.exerciseForm.patchValue({
            exerciseName: exercise.exerciseName,
            weight: exercise.weight,
            reps: exercise.reps,
            sets: exercise.sets,
        });
    }
    cancelEditMode(exercise: Exercise): void {
      exercise.editMode = false;
    }

    saveUpdatedExercise(exercise: Exercise): void {
      if (this.exerciseForm.valid) {
          const updatedExercise: Exercise = this.exerciseForm.value
          this.exercise.updateExercise(exercise.exerciseId, updatedExercise).subscribe(() => {
                  alert('Exercise updated successfully');
                  exercise.editMode = false;
                  this.loadWorkout();
              },
              (err) => {
                  alert(err.error.message);
              }
          );
      }
  }

  deleteExercise(exerciseId: number, exerciseName: string | undefined): void{
      if(confirm(`Delete exercise: ${exerciseName}?`)){
          this.exercise.deleteExercise(exerciseId).subscribe(() => {
                  // alert('exercise deleted');
                  this.loadWorkout();
              },
              (err) => {
                  console.error(err.error.message);
              }
          );
      }
  }

  toggleAddExerciseForm(): void{
    this.showAddExerciseForm = !this.showAddExerciseForm;
    if (this.showAddExerciseForm) {
      this.addExerciseForm.reset();
    }
  }

  saveExercise(): void {
    const newExercise = this.addExerciseForm.value as Exercise;
    this.exercise.createExercise(this.workout.workoutId, newExercise)
      .subscribe(
        (createdExercise) => {
          // Handle successful creation, if needed
          console.log('Exercise created:', createdExercise);
          // Add the new exercise to the workout
          this.workout.exercises.push(createdExercise);
          // reset the form and hide it
          
          this.addExerciseForm.reset();
          this.showAddExerciseForm = false;
          this.loadWorkout();
        },
        (error) => {
          // Handle error, if needed
          console.error('Error creating exercise:', error);
        }
      );
  }
}
