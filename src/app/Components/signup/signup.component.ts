import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signupForm!: FormGroup;
  

  constructor(private fb: FormBuilder,private router: Router,private auth:AuthService, private user:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  onSignup() : void{
    if(this.signupForm.valid){
      
      // Send the object to database
      this.user.signup(this.signupForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res.message)

          this.router.navigate([''])
        },
        error:(err)=>{
          alert(err.error.message);
          }
        
      })
    }
  }
}
