import { Component, OnInit } from '@angular/core';
import { QuizCategory } from 'src/app/models/riadh/quiz-category';
import { QuizCategoryService } from 'src/app/services/riadh/quiz-category.service';

@Component({
  selector: 'app-quiz-category-add',
  templateUrl: './quiz-category-add.component.html',
  styleUrls: ['./quiz-category-add.component.css']
})
export class QuizCategoryAddComponent implements OnInit {

  constructor(private quizCategoryService: QuizCategoryService) { }

  quizCateg : QuizCategory;

  add()
  {
    this.quizCategoryService.addQuiz(this.quizCateg).subscribe(
      (result) => {
        console.log(result);
      }
    );

  }
  ngOnInit(): void {
  }

}
