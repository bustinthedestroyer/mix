import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    userPassword: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService
  ) { }

  onSubmit() {
    ////TODO auth here
    let isAuthenticated = true;
    if (isAuthenticated) {
      this.cookieService.set( 'Auth', 'AuthToken' );
      this.router.navigate(["/recipes"]);
    }
  }

  ngOnInit() {
  }

}
