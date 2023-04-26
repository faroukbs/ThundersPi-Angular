import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { Project } from '../../models/riadh/project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:8181/project';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;

  //We get the same amount of methods inside the ProjectController file in Spring

  getProjectList(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.baseUrl + '/');
  }
  getProjectListByTeacher(teacherid: number): Observable<Project[]> {
    const url = `${this.baseUrl}/teacher/${teacherid}`;
    return this.httpClient.get<Project[]>(url);
  }

  getProjectById(projectId : number):Observable<Project> 
  {
    const url = `${this.baseUrl}/${projectId}`;
    return this.httpClient.get<Project>(url);
  }

  addProject(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/', formData);
  }
  updateProject(formData: FormData): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/', formData);
  }

  deleteProject(projectId: number): Observable<Project> {
    const url = `${this.baseUrl}/${projectId}`;
    return this.httpClient.delete<Project>(url);
  }

}
