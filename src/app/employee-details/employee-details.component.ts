import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number
  employee!: Employee
  constructor(private route: ActivatedRoute, private employeService: EmployeeService,
    private router: Router) { }

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

  changePassword(): void {
    // Implement the logic for changing the password
    console.log('Change Password clicked');
    this.router.navigate(['/change-password']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}
