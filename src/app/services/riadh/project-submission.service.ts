import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { ProjectSubmission } from 'src/app/models/riadh/project-submission.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ProjectSubmissionService {

  baseUrl = 'http://localhost:8181/projectSub';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;
  constructor(private httpClient: HttpClient) { }
  post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  getProjectList(): Observable<ProjectSubmission[]> {
    return this.httpClient.get<ProjectSubmission[]>(this.baseUrl + '/');
  }
  //getProjectListByTeacher(teacherid: number): Observable<ProjectSubmission[]> {
    //const url = `${this.baseUrl}/teacher/${teacherid}`;
    //return this.httpClient.get<Project[]>(url);
  //}

  getProjectById(projecSubId : number):Observable<ProjectSubmission> 
  {
    
    const url = `${this.baseUrl}/${projecSubId}`;
    //const url = `http://localhost:8181/admin/project/${projecSubId}`;
    
    return this.httpClient.get<ProjectSubmission>(url);
  }

  addProject(projectSub : ProjectSubmission): Observable<any> {
  const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(projectSub);
    return this.httpClient.post(this.baseUrl , body,{'headers':headers});
  }
  updateProject(projectSub : ProjectSubmission): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/', projectSub,httpOptions);
  }

  deleteProject(projectSub: ProjectSubmission): Observable<ProjectSubmission> {
    const url = `${this.baseUrl}/${projectSub.id}`;
    return this.httpClient.delete<ProjectSubmission>(url);
  }
}
