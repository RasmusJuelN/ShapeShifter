# ShapeShifter

> **Track, Achieve, Repeat – Your Fitness Journey, Your Way!**

ShapeShifter is a fitness tracking web application built with Angular. It lets users log workouts, monitor their BMI over time, and manage personal fitness data, while giving administrators tools to manage exercises and workout templates.

## Features

- **Workout Tracking** – Create and review workouts with exercises, sets, reps, and weights.
- **BMI Tracker** – Record and visualize Body Mass Index history.
- **User Dashboard** – Central hub for all personal fitness data.
- **Admin Panel** – Manage users, exercises, and workout routines.
- **Secure Authentication** – JWT-based login and route protection.

## Tech Stack

| Area | Technology |
|------|-----------|
| Frontend | Angular 16, TypeScript, SCSS |
| UI Components | Angular Material |
| Reactive State | RxJS |
| Auth | @auth0/angular-jwt |
| Testing | Karma + Jasmine |


## Project Structure

```
src/
├── app/
│   ├── Components/   # UI components (login, workouts, BMI, admin…)
│   ├── Services/     # HTTP services for API communication
│   ├── Models/       # TypeScript data models
│   ├── Guards/       # Route authentication guards
│   └── Environment/  # API URL configuration
└── assets/           # Static assets
```
