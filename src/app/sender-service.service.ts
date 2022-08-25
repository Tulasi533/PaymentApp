import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sender } from './sender';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenderServiceService {

  constructor(private http: HttpClient) { }

  getSender(custId: string): Observable<Sender>{
    const url = 'http://localhost:8080/getSender/';

    let queryParams = new HttpParams();
    queryParams = queryParams.append("custId", custId);
 
    return this.http.get<Sender>(url,{params:queryParams});
  }
}
