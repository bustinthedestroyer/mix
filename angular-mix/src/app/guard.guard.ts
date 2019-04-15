import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       
      let isLoggedIn = this.cookieService.check('Auth');
      console.log(`Is Logged in: ${isLoggedIn}`)
      if(!isLoggedIn){
        this.router.navigate(["/login"]);
      }

      return isLoggedIn;
  }
  
}
