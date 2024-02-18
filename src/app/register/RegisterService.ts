import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegisterRequest} from "./RegisterRequest";
import {AuthResponse} from "../AuthResponse/AuthResponse";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/api/register`, request);
  }
}
