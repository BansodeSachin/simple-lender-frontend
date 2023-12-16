// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('access_token')) {
      return true; // If the user is logged in, allow access to the route
    } else {
      this.router.navigate(['/login']);
      return false; // If the user is not logged in, redirect to the login page
    }
  }
}