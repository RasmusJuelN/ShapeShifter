import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSignupPage!: boolean;
  

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) {
    this.route.url.subscribe(urlSegments => {
   
      this.isSignupPage = urlSegments.length > 0 && urlSegments[0].path === 'signup';
    });
  }

  isLoggedin(): boolean{
    const token = localStorage.getItem('token'); // 

    return !!token;
  }

  logout(): void{
    this.auth.removeToken();
  }

  goMainPage(): void{
    this.router.navigate(['/main']);
  }
}
