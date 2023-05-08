import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { Project } from '../../models/riadh/project';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  public dataForm!: FormGroup;
  post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

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
    
    //const url = `${this.baseUrl}/${projectId}`;
    const url = `http://localhost:8181/admin/project/${projectId}`;
    
    return this.httpClient.get<Project>(url);
  }

  addProject(project : Project): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(project);
    return this.httpClient.post(this.baseUrl , body,{'headers':headers});
  }
  updateProject(project : Project): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/', project,httpOptions);
  }

  deleteProject(project: Project): Observable<Project> {
    const url = `${this.baseUrl}/${project.id}`;
    return this.httpClient.delete<Project>(url);
  }

}
