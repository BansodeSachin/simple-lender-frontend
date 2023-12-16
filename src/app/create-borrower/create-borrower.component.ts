import { Component } from '@angular/core';
import { Borrower } from '../borrower.model';
import { BorrowerService } from '../borrower.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-borrower',
  templateUrl: './create-borrower.component.html',
  styleUrls: ['./create-borrower.component.css']
})
export class CreateBorrowerComponent {

  borrower: Borrower = new Borrower();
  constructor(private borrowerService: BorrowerService,
    private router: Router) { }
    


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
  }

  saveBorrower(){
    this.borrowerService.createBorrower(this.borrower).subscribe( data =>{
      console.log(data);
      this.goToBorrowerList();
    },
    error => console.log(error));
  }

  goToBorrowerList(){
    this.router.navigate(['/borrower-list']);
  }
  
  onSubmit(){
    console.log(this.borrower);
    this.saveBorrower();
  }

}
