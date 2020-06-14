import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject("BASE_API_URL") private baseUrl: string,
    private http: HttpClient
  ) { }

  public register(form) {
    // return this.http.post<any>(`${this.baseUrl}/auth/register`, form);
    return of(true);
  }

  public login(form) {
    // return this.http.post<any>(`${this.baseUrl}/auth/login`, form);
    return of(true);
  }



}
