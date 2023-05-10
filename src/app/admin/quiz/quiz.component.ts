import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/riadh/quiz.model';
import { QuizService } from 'src/app/services/riadh/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  quiz : Quiz;
  constructor(private quizService: QuizService, private router:ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.quizService.getQuizById(id).subscribe(
      (data) => {
        this.quiz = data;
      }
    );
  }

  takeQuiz()
  {
    this.route.navigate(['quiz/take/'+this.quiz.id]);
  }

}
