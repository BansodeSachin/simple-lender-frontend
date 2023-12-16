import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Borrower } from '../borrower.model';
import { BorrowerService } from '../borrower.service';

@Component({
  selector: 'app-borrower-list',
  templateUrl: './borrower-list.component.html',
  styleUrls: ['./borrower-list.component.css']
})
export class BorrowerListComponent {

  borrowers!: Borrower[];

  currentUser: string = JSON.parse(localStorage.getItem('current_user') || "").username;

  constructor(private borrowerService: BorrowerService,
    private router: Router) {

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
    this.getBorrowers();
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
