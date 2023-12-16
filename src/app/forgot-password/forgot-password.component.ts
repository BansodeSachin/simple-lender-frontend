import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email: string = '';

  sendResetLink(): void {
    // Implement logic to send password reset link
    console.log('Send Reset Link clicked');
  }
}
