import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/riadh/quiz.model';
import { QuizService } from 'src/app/services/riadh/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {


  constructor(private quizService:QuizService) { }

  quizList: Quiz[]  = [];
  ngOnInit(): void {
     this.quizService.getAllQuiz().subscribe(
      (data) => {
        this.quizList = data;
      }
    );
  }

  deleteQuiz(id:number){
    this.quizService.deleteQuiz(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
