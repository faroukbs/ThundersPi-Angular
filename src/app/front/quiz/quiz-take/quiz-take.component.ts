import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/riadh/quiz.model';
import { QuizService } from 'src/app/services/riadh/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";


export const json = {
  "elements": [{
    "type": "checkbox",
    "name": "car",
    "title": "Which is the brand of your car?",
    "description": "If you own cars from multiple brands, please select all of them.",
    "choices": [ ""],
    "isRequired": true,
    "colCount": 2,
    "showNoneItem": true,
    "showOtherItem": true,
    "showSelectAllItem": true,
    "separateSpecialChoices": true
  }],
  "showQuestionNumbers": true
};
@Component({
  selector: 'app-quiz-take',
  templateUrl: './quiz-take.component.html',
  styleUrls: ['./quiz-take.component.css']
})
export class QuizTakeComponent implements OnInit {

  quiz : Quiz;
  model : Model;
  constructor(private quizService :QuizService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.quizService.getQuizById(id).subscribe(
      (data) => {
        this.quiz = data;
      }
    );
    json.elements[0].choices = this.quiz.questions[0].questionAnswers.map(a => a.content);
    const survey = new Model(json);
        survey.onComplete.add((sender, options) => {
            console.log(JSON.stringify(sender.data, null, 3));
        });
        this.model = survey;
        

  }
  
}
