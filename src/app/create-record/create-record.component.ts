import { Component } from '@angular/core';
import { Record } from '../record.model';
import { RecordService } from '../record.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent {

  borrowerId!: number;
  record: Record = new Record();
  constructor(private recordService: RecordService,
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
    this.borrowerId = this.route.snapshot.params['borrowerId'];
  }

  saveRecord(){
    this.recordService.createRecord(this.borrowerId, this.record).subscribe( data =>{
      console.log(data);
      this.goToRecordList();
    },
    error => console.log(error));
  }

  goToRecordList(){
    this.router.navigate(['/record-details/', this.borrowerId]);
  }
  
  onSubmit(){
    console.log(this.record);
    this.saveRecord();
  }

}
