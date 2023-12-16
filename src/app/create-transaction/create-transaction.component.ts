import { Component } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent {

  recordId!: number;
  transaction: Transaction = new Transaction();
  constructor(private transactionService: TransactionService,
    private route: ActivatedRoute,
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
    this.recordId = this.route.snapshot.params['recordId'];
  }

  saveTransaction(){
    this.transactionService.createTransaction(this.recordId, this.transaction).subscribe( data =>{
      console.log(data);
      this.goToTransactionList();
    },
    error => console.log(error));
  }

  goToTransactionList(){
    this.router.navigate(['/transaction-details/', this.recordId]);
  }
  
  onSubmit(){
    console.log(this.transaction);
    this.saveTransaction();
  }
}
