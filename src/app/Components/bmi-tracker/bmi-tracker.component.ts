import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BMITrackerEntry } from 'src/app/Models/BMITrackerEntry';
import { AuthService } from 'src/app/Services/auth.service';
import { BmiTrackerService } from 'src/app/Services/bmi-tracker.service';

@Component({
  selector: 'app-bmi-tracker',
  templateUrl: './bmi-tracker.component.html',
  styleUrls: ['./bmi-tracker.component.scss']
})
export class BmiTrackerComponent {

  bmiForm: FormGroup;
  userId: number = 0;
  bmi: number = 0;
  bmiClass:string = '';
  bmiClassColor: string = '';

  constructor(private bmiService: BmiTrackerService, private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.bmiForm = this.fb.group({
      gender: ['', Validators.required],
      height: [null, [Validators.required, Validators.min(1)]],
      weight: [null, [Validators.required, Validators.min(1)]],
      age: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.userId = this.auth.getUserIdFromToken();
    this.setBmi();

  }

  setBmi(): void {
    this.bmiService.getEntries(this.userId).subscribe((entries) => {
      // Assuming you have a property like 'bmi' in your BMITrackerEntry model
      const latestEntry = entries[entries.length - 1];
      this.bmi = latestEntry?.bmi;
      this.bmiClass = this.setbmiClass(this.bmi);

    });
  }

  setbmiClass(bmi: number): string {
    if (bmi < 18.5) { this.bmiClassColor = 'yellow'; return 'Underweight';}
    else if (bmi >= 18.5 && bmi < 25){this.bmiClassColor="green";  return 'Normal';} 
    else if (bmi >= 25 && bmi < 30){this.bmiClassColor="orange"; return 'Overweight';} 
    else if (bmi > 30) {this.bmiClassColor="#dc3545"; return 'Obese';} 
    return '';
  }

  submitForm(): void{
    if (this.bmiForm.valid)
    {
      const formData = this.bmiForm.value;
      const bmi = this.calculateBMI(formData.height, formData.weight);
      const userId = this.userId;
      const entry: BMITrackerEntry = {
        bmiTrackerEntryId: 0,
        userId: userId,
        entryDate: new Date,
        gender: formData.gender,
        height: formData.height,
        weight: formData.weight,
        age: formData.age,
        bmi: bmi,
      };

      this.bmiService.addEntry(entry).subscribe(() => {
        this.setBmi();
        // this.router.navigate(['main/bmi-personal']);
      });

    }
  }

  // calculateInitialBMI() {

  //   this.bmiService.calculateInitialBMI(this.initialBMIData).subscribe((result) => {
  //     // Handle the response or navigate to the next page
  //     console.log('BMI calculation result:', result);
  //   });
  // }


  calculateBMI(height: number, weight: number): number {
    // Convert height to meters
    const heightInMeters = height / 100;
    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Round to two decimal places
    return Math.round(bmi * 100) / 100;
  }
}
