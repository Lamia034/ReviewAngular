import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../register/RegisterRequest";
import {Observable} from "rxjs";
import {AuthResponse} from "../AuthResponse/AuthResponse";
import {LoginRequest} from "./LoginRequest";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/api/login`, request);
  }
}
