import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  baseUrl = 'http://localhost:8181/quiz/qstAns';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;
  constructor() { }
}
