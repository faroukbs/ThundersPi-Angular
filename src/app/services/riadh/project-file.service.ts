import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectFileService {

  baseUrl = 'http://localhost:8181/projectFile';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;
  constructor() { }

  
}
