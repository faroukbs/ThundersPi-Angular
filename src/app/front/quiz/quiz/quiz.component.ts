import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/app/models/riadh/quiz.model';
import { QuizService } from 'src/app/services/riadh/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  //quiz : Quiz;
  @Input() courseId : number = 0;
  quizList: Quiz[]  = [];
  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
    this.getQuizByCourseId();
  }
  getQuizByCourseId()
  {
    this.quizService.getQuizByCourseId(this.courseId).subscribe(
      (data) => {
        this.quizList = data;
      }
    );
  }
  
}
