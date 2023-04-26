import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectSubmissionService {

  baseUrl = 'http://localhost:8181/projectSub';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;
  constructor() { }
}
