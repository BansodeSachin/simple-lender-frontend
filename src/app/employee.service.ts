import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService { 

  private readonly accessToken = localStorage.getItem('access_token');
  private baseURL = "http://localhost:8082/api/customers";

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.get<Employee[]>(`${this.baseURL}`, { headers });
  }

  createEmployee(employee: Employee): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.post(`${this.baseURL}`, employee, { headers });
  }

  getEmployeeById(id: number): Observable<Employee>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`, { headers });
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.put(`${this.baseURL}`, employee, { headers });
  }

  deleteEmployee(id: number): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.delete(`${this.baseURL}/${id}`, { headers });
  }
}
