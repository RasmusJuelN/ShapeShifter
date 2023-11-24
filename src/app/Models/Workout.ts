import { Exercise } from "./Exercise";
import { User } from "./User";

export interface Workout {
    workoutId: number;
    workoutName?: string;
    workoutDate: Date;
    exercises?: Exercise[];
    userId: number;
    user?: User;
  }