import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NavigationComponent } from './navigation/navigation.component';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';
import { BorrowerListComponent } from './borrower-list/borrower-list.component';
import { UpdateBorrowerComponent } from './update-borrower/update-borrower.component';
import { CreateBorrowerComponent } from './create-borrower/create-borrower.component';
import { BorrowerDetailsComponent } from './borrower-details/borrower-details.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    ChangePasswordComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NavigationComponent,
    InterestCalculatorComponent,
    BorrowerListComponent,
    UpdateBorrowerComponent,
    CreateBorrowerComponent,
    BorrowerDetailsComponent,
    CreateRecordComponent,
    UpdateRecordComponent,
    RecordDetailsComponent,
    CreateTransactionComponent,
    UpdateTransactionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
