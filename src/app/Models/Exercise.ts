import { Workout } from "./Workout";

export interface Exercise {
    exerciseId: number;
    exerciseName?: string;
    weight: number;
    reps: number;
    sets: number;
    workoutId: number;
    workout?: Workout;
  }