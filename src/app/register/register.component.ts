import { Component } from '@angular/core';
import {RegisterRequest} from "./RegisterRequest";
import {Router} from "@angular/router";
import {RegisterService} from "./RegisterService";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // @ts-ignore
  // registerRequest: RegisterRequest = new RegisterRequest();
  registerRequest = {

  firstname : '',
    lastname:'',
    email:'',
    password:''
}
  constructor(private registrationService: RegisterService, private router: Router) {}

  register(): void {
    this.registrationService.register(this.registerRequest)
      .subscribe(() => {
        // Registration successful, navigate to login or home page
        this.router.navigate(['/login']);
      }, error => {
        // Handle registration error (display error message or redirect)
        console.error('Registration failed:', error);
      });
  }
}
