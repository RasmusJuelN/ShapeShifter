import { Workout } from "./Workout";

export interface User {
    userId: number;
    token?: string;
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    role?: string;
    dateOfBirth?: string;
    workouts?: Workout[];
  }