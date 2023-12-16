import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from '../record.service';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';
import { Record } from '../record.model';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent {

  id!: number;
  borrowerId!: number;
  record!: Record;
  transactions!: Transaction[];

  currentUser: string = JSON.parse(localStorage.getItem('current_user') || "").username;

  constructor(private route: ActivatedRoute, private recordService: RecordService, 
    private transactionService: TransactionService, private router: Router) { }

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
    this.id = this.route.snapshot.params['id'];
    this.borrowerId = this.route.snapshot.params['borrowerId'];

    this.record = new Record();
    this.recordService.getRecordById(this.borrowerId, this.id).subscribe( data => {
      this.record = data;
    });

    this.getTransactions(this.record.id);
  }

  private getTransactions(recordId: number) {
    this.transactionService.getTransactionList(recordId).subscribe(data => {
      this.transactions = data;
    });
  }

  transactionDetails(id: number){
    this.router.navigate(['transaction-details', id]);
  }

  addTransaction(recordId: number){
    this.router.navigate(['create-transaction', this.record.id]);
  }

  updateTransaction(id: number){
    this.router.navigate(['update-transaction', id]);
  }

  deleteTransaction(id: number){
    this.transactionService.deleteTransaction(this.record.id, id).subscribe( data => {
      console.log(data);
      this.getTransactions(this.record.id);
    })
    window.location.reload();
  }
}
