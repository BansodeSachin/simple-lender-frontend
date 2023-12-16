import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  userForm!: FormGroup;

  private readonly currentUser = JSON.parse(localStorage.getItem('current_user') || "");

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      username: [this.currentUser.username, Validators.required],
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    });
  }

  changePassword(): void {

    if (this.userForm.invalid) {
      this.toastr.error('Please fill all mandatory fields.', 'Error');
      return;
    }

    if (this.userForm.valid) {
      const pwdData = this.userForm.value;

      this.authService.changePassword(pwdData).subscribe({
        next: response => {
          if (response.message) {
            this.toastr.success(response.message, 'Success');
            this.onReset();
            this.router.navigate(['/employees']);
          } else {
            this.toastr.error('Password change failed, Please try again.');
          }
        },
        error: error => {
          console.log(error);
          this.toastr.error(error.error.message, 'Error');
        }
      });
    }
    
  }

  onReset(): void {
    this.userForm.reset();
    this.router.navigate(['/employees']);
  }

  home(): void {
    // Redirect to the login page after logout
    this.router.navigate(['/employees']);
  }

  logout(): void {
    // Clear the access token from localStorage or perform any other logout actions
    localStorage.removeItem('access_token');

    // Redirect to the login page after logout
    this.router.navigate(['/login']);
  }

}
