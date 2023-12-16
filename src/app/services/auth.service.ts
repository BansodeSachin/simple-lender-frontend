import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AppConfig } from '../app-config';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginApi: string = AppConfig.loginApi;
  private readonly userSignupApi: string = AppConfig.signupApi;
  private readonly changePWDApi: string = AppConfig.changePWDApi;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    const url = this.loginApi; // Get the API URL from AppConfig
    const body = { email, password }; // Create the request body with username and password
    return this.http.post(url, body); // Send the POST request to the API endpoint
  }

  signIn(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.loginApi, body, { headers: this.headers });
  }

  signOut(): void {
    // Clear user information and token from local storage
    localStorage.removeItem('access_token');

    // Navigate the user to the login page
    this.router.navigate(['/login']);
  }

  getUserRole(): string {
    let currentUser = JSON.parse(localStorage.getItem('current_user') || "");

    if (currentUser && currentUser.roles)
      return currentUser.roles;
    else
      return "";
  }

  getToken(): string {
    return localStorage.getItem('access_token') as any;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token != null;
  }

  // User Signup
  signup(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.userSignupApi, user, { headers });
  }

  // User change pwd
  changePassword(pwdData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.changePWDApi, pwdData, { headers });
  }

}
