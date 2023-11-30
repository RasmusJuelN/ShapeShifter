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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
