import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/riadh/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
  }

}
