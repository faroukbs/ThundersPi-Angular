import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://localhost:8181/quiz';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;

  constructor() { }
}
