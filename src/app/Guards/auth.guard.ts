import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';


import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(
    private router: Router, private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.auth.isLoggedin()){
        return true;
      }
      else{
        this.router.navigate(['']);
        alert("You need to be logged in to enter this page.");
        
        return false;
      }
       
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}