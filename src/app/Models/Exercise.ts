import { Workout } from "./Workout";

export interface Exercise {
    exerciseId: number;
    exerciseName?: string;
    reps: number;
    sets: number;
    workoutId: number;
    workout?: Workout;
  }