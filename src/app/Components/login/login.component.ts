import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private auth:AuthService, private router: Router, private toast: NgToastService, private user: UserService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })


  }
  
  
  onLogin(){
    if(this.loginForm.valid){
      // Send the object to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res.message)
          alert(res.message)
          this.toast.success({
            detail: "Success", summary: res.message, duration: 3000
          });
          this.loginForm.reset();
          this.auth.setToken(res.token)
          const tokenPayload = this.auth.decodedToken();
          this.user.setUserId(tokenPayload.id)



          this.router.navigate(['main'])
        },
        error:(err)=>{
          alert(err.error.message)
          this.toast.error({
            detail: "Error", summary: err?.error.message, duration: 3000
          });
        }
      })
    }
  }
}
