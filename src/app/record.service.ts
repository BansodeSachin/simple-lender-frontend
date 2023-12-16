import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from './record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private readonly accessToken = localStorage.getItem('access_token');
  private baseURL = "http://localhost:8082/api/borrowers";

  constructor(private httpClient: HttpClient) { }

  getRecordList(borrowerId: number): Observable<Record[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.get<Record[]>(`${this.baseURL}/${borrowerId}/records`, { headers });
  }

  createRecord(borrowerId: number, record: Record): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.post(`${this.baseURL}/${borrowerId}/records`, record, { headers });
  }

  getRecordById(borrowerId: number, id: number): Observable<Record>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.get<Record>(`${this.baseURL}/${borrowerId}/records/${id}`, { headers });
  }

  updateRecord(borrowerId: number, id: number, record: Record): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.put(`${this.baseURL}/${borrowerId}/records`, record, { headers });
  }

  deleteRecord(borrowerId: number, id: number): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.httpClient.delete(`${this.baseURL}/${borrowerId}/records/${id}`, { headers });
  }
}
