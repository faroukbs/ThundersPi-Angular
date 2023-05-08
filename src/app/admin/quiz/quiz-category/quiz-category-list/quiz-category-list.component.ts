import { Component, OnInit } from '@angular/core';
import { QuizCategory } from 'src/app/models/riadh/quiz-category';
import { QuizCategoryService } from 'src/app/services/riadh/quiz-category.service';

@Component({
  selector: 'app-quiz-category-list',
  templateUrl: './quiz-category-list.component.html',
  styleUrls: ['./quiz-category-list.component.css']
})
export class QuizCategoryListComponent implements OnInit {

  constructor(private quizCategoryService: QuizCategoryService) { }
  quizCategList : QuizCategory[];
  ngOnInit(): void {
    this.quizCategoryService.getAllQuiz().subscribe(
      (data) => {
        this.quizCategList = data;
      } 
    );
  }

  delete(id:number){
    this.quizCategoryService.deleteQuiz(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
