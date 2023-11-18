import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private http: HttpClient
  ) { }
  getAllBill(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/bill');
  }
  getBillId(id: string | number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/bill/${id}`);
  }
  addBill(bill: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/bill', bill);
  }
  updateBill(bill: any): Observable<any> {
    return this.http.patch<any>(`http://localhost:8080/api/bill/${bill._id}`, bill)
  }
  // removeBlog(id: number): Observable<IBlog> {
  //   return this.http.delete<IBlog>(`http://localhost:8080/api/blogs/${id}`)
  // }
}
