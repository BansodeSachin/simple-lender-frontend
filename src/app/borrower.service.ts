import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Borrower } from './borrower.model';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {

  private readonly accessToken = localStorage.getItem('access_token');
  private baseURL = "http://localhost:8082/api/borrowers";

  constructor(private httpClient: HttpClient) { }

  getBorrowerList(): Observable<Borrower[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.get<Borrower[]>(`${this.baseURL}`, { headers });
  }

  createBorrower(borrower: Borrower): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.post(`${this.baseURL}`, borrower, { headers });
  }

  getBorrowerById(id: number): Observable<Borrower>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.get<Borrower>(`${this.baseURL}/${id}`, { headers });
  }

  updateBorrower(id: number, borrower: Borrower): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.put(`${this.baseURL}`, borrower, { headers });
  }

  deleteBorrower(id: number): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.delete(`${this.baseURL}/${id}`, { headers });
  }
}
