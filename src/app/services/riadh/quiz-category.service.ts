import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizCategory } from 'src/app/models/riadh/quiz-category';

@Injectable({
  providedIn: 'root'
})
export class QuizCategoryService {
  baseUrl = 'http://localhost:8181/quizCateg';
  storageUserAsStr: any = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') || '{}')
  : null;
  constructor(private httpClient : HttpClient) { }
  getAllQuiz() : Observable<QuizCategory[]>
  {
    return this.httpClient.get<QuizCategory[]>(this.baseUrl + '/');
  }

  
  getQuizCategoryById(quizCategId : number): Observable<QuizCategory>
  {
    const url = `${this.baseUrl}/${quizCategId}`
    return this.httpClient.get<QuizCategory>(url);
  }

  addQuiz(quizCateg : QuizCategory) : Observable<any>
  {
    return this.httpClient.post(this.baseUrl + '/', quizCateg);
  }
  updateQuiz(quizCateg : QuizCategory) : Observable<any>
  {
    return this.httpClient.put(this.baseUrl + '/',quizCateg);
  }

  deleteQuiz(quizCategId: number)
  {
    const url = `${this.baseUrl}/${quizCategId}`
    return this.httpClient.delete(url);
  }



  
}
