import { Component, OnInit } from '@angular/core';
import { QuizCategory } from 'src/app/models/riadh/quiz-category';
import { QuizCategoryService } from 'src/app/services/riadh/quiz-category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-category-update',
  templateUrl: './quiz-category-update.component.html',
  styleUrls: ['./quiz-category-update.component.css']
})
export class QuizCategoryUpdateComponent implements OnInit {

  constructor(private quizCategoryService: QuizCategoryService,private router: ActivatedRoute, private route: Router) { }

  quizCateg : QuizCategory;

  update(){
    this.quizCategoryService.updateQuiz(this.quizCateg).subscribe(
      (result) => {
        console.log(result);
      } 
    );
  }

  get(id:number)
  {
    this.quizCategoryService.getQuizCategoryById(id).subscribe(
      (data) => {
        this.quizCateg = data;
      }
    );
  }
  ngOnInit(): void {
    this.get(this.router.snapshot.params?.['id']);
  }

}
