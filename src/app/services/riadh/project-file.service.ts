import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpEvent } from '@angular/common/http';
import { ProjectFile } from 'src/app/models/riadh/project-file.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectFileService {

  baseUrl = 'http://localhost:8181/projectFile';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;
  constructor(private httpClient: HttpClient) { }


  uploadProjectFile(file: File): Observable<HttpEvent<any>>
  {
    const formData : FormData = new FormData(); //Stores Key Value Pairs
    formData.append('file',file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`,formData, {
      reportProgress:true,
      responseType:'json'
    });
    return this.httpClient.request(req);
  }

  uploadProjectFileByProjectId(file: File,projectId:number | undefined): Observable<HttpEvent<any>>
  {
    const formData : FormData = new FormData(); //Stores Key Value Pairs
    formData.append('file',file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload${projectId}`,formData, {
      reportProgress:true,
      responseType:'json'
    });
    return this.httpClient.request(req);
  }

  uploadProjectFileByProjectSubId(file: File,projectSubId:number | undefined): Observable<HttpEvent<any>>
  {
    const formData : FormData = new FormData(); //Stores Key Value Pairs
    formData.append('file',file);

    const req = new HttpRequest('POST', `${this.baseUrl}/uploadSub${projectSubId}`,formData, {
      reportProgress:true,
      responseType:'json'
    });
    return this.httpClient.request(req);
  }

  getProjectFilesByProjectId(projectId:number): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/files${projectId}`) 
  }

  getProjectFileById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/file/${id}`);
  }

  getProjectFiles(): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/files`)
  }

  deleteProjectFile(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' }); 
  }

  
}
