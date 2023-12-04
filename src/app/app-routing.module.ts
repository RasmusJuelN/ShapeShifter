import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { MainComponent } from './Components/main/main.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { WorkoutComponent } from './Components/workout/workout.component';
import { AddWorkoutComponent } from './Components/add-workout/add-workout.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserOverviewComponent } from './Components/user-overview/user-overview.component';
import { AdminWorkoutsComponent } from './Components/admin-workouts/admin-workouts.component';
import { AdminExercisesComponent } from './Components/admin-exercises/admin-exercises.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent }, 
  { path: 'main', component: MainComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'workout/:id', component: WorkoutComponent },
  { path: 'addworkout', component: AddWorkoutComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
        { path: 'user-overview', component: UserOverviewComponent },
        { path: 'workout-routines', component: AdminWorkoutsComponent},
        { path: 'exercises', component: AdminExercisesComponent },
    ],
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
