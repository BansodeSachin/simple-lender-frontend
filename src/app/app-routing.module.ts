import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { BorrowerDetailsComponent } from './borrower-details/borrower-details.component';
import { CreateBorrowerComponent } from './create-borrower/create-borrower.component';
import { UpdateBorrowerComponent } from './update-borrower/update-borrower.component';
import { BorrowerListComponent } from './borrower-list/borrower-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'interest-calculator', component: InterestCalculatorComponent },
  { path: 'update-transaction/:id', component: UpdateTransactionComponent },
  { path: 'create-transaction/:recordId', component: CreateTransactionComponent },
  { path: 'record-details/:borrowerId/:id', component: RecordDetailsComponent },
  { path: 'update-record/:id', component: UpdateRecordComponent },
  { path: 'create-record/:borrowerId', component: CreateRecordComponent },
  { path: 'borrower-details/:id', component: BorrowerDetailsComponent },
  { path: 'create-borrower', component: CreateBorrowerComponent },
  { path: 'update-borrower/:id', component: UpdateBorrowerComponent },
  { path: 'borrower-list', component: BorrowerListComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
