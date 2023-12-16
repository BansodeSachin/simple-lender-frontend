import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { BorrowerService } from '../borrower.service';
import { Borrower } from '../borrower.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  employees!: Employee[];
  borrowers!: Borrower[];

  currentUser: string = JSON.parse(localStorage.getItem('current_user') || "").username;

  constructor(private employeeService: EmployeeService,
    private router: Router, private borrowerService: BorrowerService) {

  }

  totalAmount: number = 0;
  totalPrincipal: number = 0;
  totalInterest: number = 0;


  calculateTotals(): void {
    // Example: Assume employees have properties amount, principal, and interest
    //const employees = this.borrowerService.getEmployees(); // Replace with your service method

    //this.totalAmount = employees.reduce((sum, employee) => sum + employee.amount, 0);
    //this.totalPrincipal = employees.reduce((sum, employee) => sum + employee.principal, 0);
    //this.totalInterest = employees.reduce((sum, employee) => sum + employee.interest, 0);
    this.totalAmount = 10000;
    this.totalPrincipal = 8500;
    this.totalInterest = 1500;
  }

  home(): void {
    // Redirect to the login page after logout
    this.router.navigate(['/dashboard']);
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
    this.getEmployees();
    this.getBorrowers();
    // Fetch data or calculate totals from your service
    this.calculateTotals();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  private getBorrowers() {
    this.borrowerService.getBorrowerList().subscribe(data => {
      this.borrowers = data;
    });
  }

  borrowerDetails(id: number){
    this.router.navigate(['borrower-details', id]);
  }

  addBorrower(){
    this.router.navigate(['create-borrower']);
  }

  updateBorrower(id: number){
    this.router.navigate(['update-borrower', id]);
  }

  deleteBorrower(id: number){
    this.borrowerService.deleteBorrower(id).subscribe( data => {
      console.log(data);
      this.getBorrowers();
    })
    window.location.reload();
  }
}
