import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjects() {
    return this.http.get(`${environment.baseUrl}/api/subject/getAll`)
  }
  getSubjectById(id: any) {
    return this.http.get(`${environment.baseUrl}/api/subject/getAll/${id}`)
  }
  saveSubject(subject: any) {
    return this.http.post(`${environment.baseUrl}/api/subject/add`, subject)
  }
  deleteSubject(id: any) {
    return this.http.delete(`${environment.baseUrl}/api/subject/delete/${id}`)
  }
}
