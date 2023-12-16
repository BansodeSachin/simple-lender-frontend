import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
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
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
