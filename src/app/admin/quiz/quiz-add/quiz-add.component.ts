import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Quiz } from 'src/app/models/riadh/quiz.model';
import { CourseService } from 'src/app/services/course.service';
import { QuizService } from 'src/app/services/riadh/quiz.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig,MatDialogRef } from '@angular/material/dialog';
import { QuizCategory } from 'src/app/models/riadh/quiz-category';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import {Overlay} from '@angular/cdk/overlay';
import { QuizCategoryService } from 'src/app/services/riadh/quiz-category.service';
import { Question } from 'src/app/models/riadh/question.model';
import { QuestionAnswer } from 'src/app/models/riadh/question-answer.model';


@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.css'],
})
export class QuizAddComponent implements OnInit {

  // @ViewChild('quizCategory',{read:QuizCategoryAddComponent})
  // quizCategoryComponent!: QuizCategoryAddComponent;
  
  quiz : Quiz;
  listCourses: Course[];
  listCategories : QuizCategory[];
  quizCategory : QuizCategory;
  questions : Question[] = [new Question()];
  course: Course;
  constructor(private quizService:QuizService, private quizCategoryService:QuizCategoryService, private courseService : CourseService,
    public dialog : MatDialog , public overlay : Overlay) { }

  openQuestionConfig()
  {
   const dialogRef = this.dialog.open(DialogQuestion, {
      data: {questions : this.questions},
      width: '800px',
      height: '800px',
   });
    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.adding){
      this.questions = dialogRef.componentInstance.questions;
      console.log(this.questions);
      }
      else
      console.log('The dialog was closed');
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog,
      {
        data: {title: '', description: ''}
        });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.adding){
      this.quizCategory = new QuizCategory(dialogRef.componentInstance.category.title, dialogRef.componentInstance.category.description);
      console.log(this.quizCategory);
      this.quizCategoryService.addQuiz(this.quizCategory).subscribe(
        (result) => {
          console.log(result);

          console.log("categ "+this.quizCategory);
          this.getCategories();
          //this.listCategories.fill(this.quizCategory);
        }

      )
      
    }
      else
      console.log('The dialog was closed');
    });
  }


  ngOnInit(): void {
    this.quiz = new Quiz();
    this.course = new Course();
    this.getCourses();
    this.getCategories();
  }
  getCategories()
  {
    this.quizCategoryService.getAllQuiz().subscribe(
      (categories : QuizCategory[]) => {
        this.listCategories = categories as QuizCategory[];
      }
    );
  }

  getCourses(): void {
    this.courseService.getCourseList().subscribe(
      (courses) => {
        console.log(courses);
        this.listCourses = courses as  Course[];
      }
    );
  }
  onSelectCourse(event: any) {
    this.course.idCourse = event.target.value
    console.log(this.course.idCourse)
  }
  onSelectCategory(event: any) {
    this.quizCategory = event.target.value
    console.log(this.quizCategory)
  }
  addQuiz(): void {
    this.quiz.quizCategories = [this.quizCategory];
    this.quiz.questions = this.questions;
    this.quiz.course = this.course;
    //console.log(this.course.idCourse);
    console.log(this.quiz);
    this.quizService.addQuiz(this.quiz).subscribe(
      //redirect to quiz list page
      (result) => {	
        console.log("after add quiz" + result);
        
      });
  }

}

export interface DialogData
{
  title : string;
  description : string;
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
    public adding: boolean = false;
    category : QuizCategory;
    public title: string;
    public description: string;
  onNoClick(): void {
    this.dialogRef.close();
  }
  add(): void { 
    //this.category = new QuizCategory(this.data.title,this.data.description);
    this.adding =true;
    console.log(this.data.title);
    this.category = new QuizCategory(this.title,this.description);
    this.dialogRef.close(this.category);
  }
}

export interface QuestionsData
{
  questions: Question[];
}
@Component({
  selector: 'dialog-question',
  templateUrl: './question-dialog.html',
})
export class DialogQuestion {

  constructor(
    public dialogRef: MatDialogRef<DialogQuestion>,
    @Inject(MAT_DIALOG_DATA) public data: QuestionsData,
  ) {
  }
    public adding: boolean = false;
    public questions: Question[]= [new Question()];
  onNoClick(): void {
    this.dialogRef.close();
  }
  addQuestion(): void {
    let question = new Question();
    question.questionAnswers=[new QuestionAnswer()]
    this.questions.push(question);
  }
  addQuestionAnswer(index : number): void {
    this.questions[index].questionAnswers.push(new QuestionAnswer());
  }
  add(): void { 
    //this.category = new QuizCategory(this.data.title,this.data.description);
    
    this.dialogRef.close(this.questions);
  }
}