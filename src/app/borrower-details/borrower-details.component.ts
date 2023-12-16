import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Borrower } from '../borrower.model';
import { BorrowerService } from '../borrower.service';
import { Record } from '../record.model';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-borrower-details',
  templateUrl: './borrower-details.component.html',
  styleUrls: ['./borrower-details.component.css']
})
export class BorrowerDetailsComponent {

  id!: number
  borrower!: Borrower
  records!: Record[];

  currentUser: string = JSON.parse(localStorage.getItem('current_user') || "").username;

  constructor(private route: ActivatedRoute, private borrowerService: BorrowerService,
    private recordService: RecordService, private router: Router) { }

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

    this.borrower = new Borrower();
    this.borrowerService.getBorrowerById(this.id).subscribe( data => {
      this.borrower = data;
    });

    this.getRecords(this.borrower.id);
  }

  private getRecords(borrowerId: number) {
    this.recordService.getRecordList(borrowerId).subscribe(data => {
      this.records = data;
    });
  }

  recordDetails(borrowerId: number, id: number){
    this.router.navigate(['record-details', borrowerId, id]);
  }

  addRecord(borrowerId: number){
    this.router.navigate(['create-record', borrowerId]);
  }

  updateRecord(id: number){
    this.router.navigate(['update-record', id]);
  }

  deleteRecord(id: number){
    this.recordService.deleteRecord(this.borrower.id, id).subscribe( data => {
      console.log(data);
      this.getRecords(this.borrower.id);
    })
    window.location.reload();
  }
}
