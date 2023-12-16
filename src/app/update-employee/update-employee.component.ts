import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
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

  changePassword(): void {
    // Implement the logic for changing the password
    console.log('Change Password clicked');
    this.router.navigate(['/change-password']);
  }
}
