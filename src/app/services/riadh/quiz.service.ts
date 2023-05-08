import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/models/riadh/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://localhost:8181/quiz';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;
  constructor(private httpClient : HttpClient) { }
  getAllQuiz() : Observable<Quiz[]>
  {
    return this.httpClient.get<Quiz[]>(this.baseUrl + '/');
  }

  getQuizByCourse(courseId : number): Observable<Quiz[]>
  {
    const url = `${this.baseUrl}/course/${courseId}`;
    return this.httpClient.get<Quiz[]>(url);
  }

  getQuizById(quizId : number): Observable<Quiz>
  {
    const url = `${this.baseUrl}/${quizId}`
    return this.httpClient.get<Quiz>(url);
  }

  addQuiz(quiz : Quiz) : Observable<any>
  {
    return this.httpClient.post(this.baseUrl + '/', quiz);
  }
  updateQuiz(quiz : Quiz) : Observable<any>
  {
    return this.httpClient.put(this.baseUrl + '/',quiz);
  }

  deleteQuiz(quizId: number)
  {
    const url = `${this.baseUrl}/${quizId}`
    return this.httpClient.delete(url);
  }



  
}
