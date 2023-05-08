import { HttpClient } from '@angular/common/http';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetPass } from '../models/reset-pass';

@Injectable({
  providedIn: 'root'
})
export class ResetServiceService {

  constructor(private httpClient: HttpClient) { }

  forgetPassword(email:string):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8181/api/reset/forgot_password?email='+email, {})
  }

  getResetPassword(token:string):Observable<any>{
    return this.httpClient.get<any>('http://localhost:8181/api/reset/reset_password?token='+token)
  }

  postResetPassword(reset: ResetPass):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8181/api/reset/reset_password', reset)
  }

}