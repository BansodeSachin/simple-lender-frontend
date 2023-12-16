import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  email: string = '';
  password: string = '';
  role: any[] = ['employee']; // Default role to 'user'

  roleList: any[] = [];

  userForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.roleList = [
      { role: "employee", description: "Employee Role" },
      { role: "manager", description: "Manager Role" },
      { role: "admin", description: "Admin Role" }
    ];
  }

  register(): void {
    // Implement registration logic here
    console.log('Registration clicked');
    console.log('User Details:', {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      email: this.email,
      password: this.password,
      role: this.role,
    });

    if (this.userForm.invalid) {
      this.toastr.error('Please fill all mandatory fields.', 'Error');
      return;
    }

    if (this.userForm.valid) {
      const user = this.userForm.value;

      this.authService.signup(user).subscribe({
        next: response => {
          if (response.message) {
            this.toastr.success(response.message, 'Success');
            this.onReset();
            this.router.navigate(['/login']);
          } else {
            this.toastr.error('User Registration failed, Please try again.');
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
    this.router.navigate(['/login']);
  }

  loginPage(): void {
    // Redirect to the login page after logout
    this.router.navigate(['/login']);
  }
}
