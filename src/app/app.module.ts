import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './Components/background/background.component';
import { HeaderComponent } from './Components/header/header.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { MainComponent } from './Components/main/main.component';
import { NgToastModule} from 'ng-angular-popup';
import { SignupComponent } from './Components/signup/signup.component';
import { WorkoutOverviewComponent } from './Components/workout-overview/workout-overview.component';
import { WorkoutComponent } from './Components/workout/workout.component';
import { AddWorkoutComponent } from './Components/add-workout/add-workout.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserOverviewComponent } from './Components/user-overview/user-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavboxComponent } from './Components/admin-navbox/admin-navbox.component';

import { AdminExercisesComponent } from './Components/admin-exercises/admin-exercises.component';
import { AdminWorkoutsComponent } from './Components/admin-workouts/admin-workouts.component';
import { UserNavboxComponent } from './Components/user-navbox/user-navbox.component';
import { BmiTrackerComponent } from './Components/bmi-tracker/bmi-tracker.component';
import { BmiPersonalComponent } from './Components/bmi-personal/bmi-personal.component';



@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    LandingpageComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    WorkoutOverviewComponent,
    WorkoutComponent,
    AddWorkoutComponent,
    AdminComponent,
    UserOverviewComponent,
    AdminNavboxComponent,
    AdminExercisesComponent,
    AdminWorkoutsComponent,
    UserNavboxComponent,
    BmiTrackerComponent,
    BmiPersonalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
