import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {

    this.onSignIn(this.username, this.password);

    // For simplicity, let's check if the username is 'test' and password is 'password'
    /*if (this.username === 'test' && this.password === 'password') {

      // Mocking the receipt of an access token from the server
      const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXNhbiIsImlhdCI6MTcwMTkzNTIxNiwiZXhwIjoxNzAyMDIxNjE2fQ.RbHdmv_d_X0yphdHDweNP464RcDmMrcqWKMEjdZtF9cLBZzO4pQP18aGAmBUQyZ-EFFKZFCjHp9cml98e4EisQ';
      
      // Storing the access token in localStorage
      localStorage.setItem('access_token', accessToken);

      // Redirect to the dashboard on successful login
      this.router.navigate(['/employees']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }*/
  }


  onSignIn(username: string, password: string): void {
    const success = false;

    this.authService.signIn(username.trim(), password.trim()).subscribe({
      next: response => {
        if (response && response.accessToken) {
          // Store the token in local storage
          localStorage.setItem('current_user', JSON.stringify(response));
          localStorage.setItem('access_token', response.accessToken);
          // Navigate to the dashboard
          this.router.navigate(['/dashboard']);
        } else
          this.errorMessage = 'Invalid username or password';
      }, error: error => {
        console.log(error);
        this.errorMessage = 'Invalid username or password';
      },
      complete: () => console.info('complete')
    });
    
  }
}
