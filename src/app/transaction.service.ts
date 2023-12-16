import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly accessToken = localStorage.getItem('access_token');
  private baseURL = "http://localhost:8082/api/records";

  constructor(private httpClient: HttpClient) { }

  getTransactionList(recordId: number): Observable<Transaction[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.get<Transaction[]>(`${this.baseURL}/${recordId}/transactions`, { headers });
  }

  createTransaction(recordId: number, record: Transaction): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.post(`${this.baseURL}/${recordId}/transactions`, record, { headers });
  }

  getTransactionById(recordId: number, id: number): Observable<Transaction>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.get<Transaction>(`${this.baseURL}/${recordId}/transactions/${id}`, { headers });
  }

  updateTransaction(recordId: number, id: number, record: Transaction): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.put(`${this.baseURL}/${recordId}/transactions`, record, { headers });
  }

  deleteTransaction(recordId: number, id: number): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.delete(`${this.baseURL}/${recordId}/transactions/${id}`, { headers });
  }
}
