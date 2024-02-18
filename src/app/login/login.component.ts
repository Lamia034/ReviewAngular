import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "./LoginService";
import {AuthResponse} from "../AuthResponse/AuthResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // @ts-ignore
  // registerRequest: RegisterRequest = new RegisterRequest();
  loginRequest = {
    email:'',
    password:''
  }
  constructor(private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.login(this.loginRequest)
      .subscribe(
        (authResponse: AuthResponse) => {
        console.log('Login successful:', authResponse);

        this.router.navigate(['/login']);
        console.log();
      }, error => {
        console.error('Registration failed:', error);
      });
  }
}


