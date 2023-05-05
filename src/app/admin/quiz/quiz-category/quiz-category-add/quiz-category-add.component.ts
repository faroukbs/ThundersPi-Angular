import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { QuizCategory } from 'src/app/models/riadh/quiz-category';
import { QuizCategoryService } from 'src/app/services/riadh/quiz-category.service';
export interface DialogData {
  title : string;
  description: string;
}
@Component({
  selector: 'app-quiz-category-add',
  templateUrl: './quiz-category-add.component.html',
  styleUrls: ['./quiz-category-add.component.css']
})
export class QuizCategoryAddComponent implements OnInit {


  constructor(public quizCategAddRef : MatDialogRef<QuizCategoryAddComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , public quizCategoryService : QuizCategoryService) { }

  ngOnInit(): void {
    console.log("dialog opened");
  }

  public quizCateg : QuizCategory = new QuizCategory();
  addQuizCategory() : void {
    //let quizCateg = new QuizCategory();
    
    this.quizCategoryService.addQuiz(this.quizCateg).subscribe(
      (result) => {
        console.log(result);
      });
    }

    setQuizCategory() : void {
      this.quizCateg.title = this.data.title;
    this.quizCateg.description = this.data.description;
    }

  onNoClick() : void {
    
    this.quizCategAddRef.close();
  }


}
