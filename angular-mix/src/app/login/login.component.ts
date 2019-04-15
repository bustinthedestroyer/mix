import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) { }

  onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);
  }

  ngOnInit() {
  }

}
