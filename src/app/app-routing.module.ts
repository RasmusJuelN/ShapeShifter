import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { MainComponent } from './Components/main/main.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { WorkoutComponent } from './Components/workout/workout.component';
import { AddWorkoutComponent } from './Components/add-workout/add-workout.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent }, 
  { path: 'main', component: MainComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'workout/:id', component: WorkoutComponent },
  { path: 'addworkout', component: AddWorkoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
