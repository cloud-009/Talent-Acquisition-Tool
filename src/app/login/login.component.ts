import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../Service/Login/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginUsers: any = [
    {
      "id": 1,
      "email": "admin@gmail.com",
      "password": "Gmail@01"
    },
    {
      "id": 2,
      "email": "sai@wissen.com",
      "password": "Gmail@01"
    },
    {
      "id": 2,
      "email": "someone@wissen.com",
      "password": "Gmail@01"
    }
  ];

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.loginFormControls();
  }

  Toast: any = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    background: 'blue',
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  loginFormControls() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]]
    })
  }

  // get formControls() {
  //   return this.loginForm.controls;
  // }

  loginToDashboard() {
    if (this.loginForm.valid) {
      const loginUser = this.loginUsers.find((user: any) => {
        return user.email === this.loginForm.value.email && user.password === this.loginForm.value.password
      });
      if (loginUser) {
        this.auth.loggedIn$.next(true);
        localStorage.setItem('token', JSON.stringify(this.loginForm.value));
        this.router.navigate(['home']);
      } else {
        this.Toast.fire({
          icon: 'error',
          iconColor: 'red',
          background: '#ffcccc',
          text: 'User not found!!'
        })
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}